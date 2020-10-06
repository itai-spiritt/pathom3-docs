(ns com.wsscode.pathom.docs.resolvers-demos
  (:require [clojure.string :as str]
            [com.wsscode.pathom3.connect.built-in.resolvers :as pbir]
            [com.wsscode.pathom3.connect.indexes :as pci]
            [com.wsscode.pathom3.connect.operation :as pco]
            [com.wsscode.pathom3.interface.eql :as p.eql]
            [com.wsscode.pathom3.interface.smart-map :as psm]
            [com.wsscode.pathom3.entity-tree :as p.ent]))

;; defresolver

; this resolver computes a slug to use on URL from some article title
(pco/defresolver article-slug [env {:acme.article/keys [title]}]
  {::pco/op-name `article-slug
   ::pco/input   [:acme.article/title]
   ::pco/output  [:acme.article/slug]}
  {:acme.article/slug (str/replace title #"[^a-z0-9A-Z]" "-")})

(pco/defresolver article-slug [env {:acme.article/keys [title]}]
  {::pco/input  [:acme.article/title]
   ::pco/output [:acme.article/slug]}
  {:acme.article/slug (str/replace title #"[^a-z0-9A-Z]" "-")})


;; invoking resolvers

(def user-from-id
  (pbir/static-table-resolver `user-db :acme.user/id
    {1 #:acme.user{:name  "Trey Parker"
                   :email "trey@provider.com"}
     2 #:acme.user{:name  "Matt Stone"
                   :email "matt@provider.com"}}))

; avatar slug is a version of email, converting every non letter character into dashes
(pco/defresolver user-avatar-slug [{:acme.user/keys [email]}]
  {:acme.user/avatar-slug (str/replace email #"[^a-z0-9A-Z]" "-")})

(pco/defresolver user-avatar-url [{:acme.user/keys [avatar-slug]}]
  {:acme.user/avatar-url (str "http://avatar-images-host/for-id/" avatar-slug)})

(-> {:acme.user/id 1}
    (user-from-id)
    (user-avatar-slug)
    (user-avatar-url)
    :acme.user/avatar-url)
; => "http://avatar-images-host/for-id/trey-provider-com"

(def indexes
  (pci/register [user-from-id
                 user-avatar-slug
                 user-avatar-url]))

; now instead of reference the functions, we let Pathom figure them out using the indexes
(->> {:acme.user/id 2}
     (psm/smart-map indexes)
     :acme.user/avatar-url)
; => "http://avatar-images-host/for-id/matt-provider-com"

; to highlight the fact that we disregard the function, other ways where we can change
; the initial data and reach the same result:
(->> {:acme.user/email "other@provider.com"}
     (psm/smart-map indexes)
     :acme.user/avatar-url)
; => "http://avatar-images-host/for-id/other-provider-com"

(->> {:acme.user/avatar-slug "some-slogan"}
     (psm/smart-map indexes)
     :acme.user/avatar-url)
; => "http://avatar-images-host/for-id/some-slogan"

(-> {:acme.user/id 1}
    (->> (psm/smart-map indexes))
    (select-keys [:acme.user/email :acme.user/avatar-slug]))

(-> {:acme.user/id 1}
    (->> (p.ent/with-entity indexes))
    (p.eql/process [:acme.user/email :acme.user/avatar-slug]))