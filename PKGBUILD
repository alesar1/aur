# Maintainer: James An <james@jamesan.ca>

_pkgname=solr
pkgname=solr-conf-drupal
pkgver=1
pkgrel=2
pkgdesc="Configuration files to enable Drupal 7.x or 8.x to use Solr 3.x, 4.x, or 5.x as its search provider"
arch=('any')
url="http://drupal.org/project/search_api_$_pkgname"
license=('GPL')
depends=('solr>=3' 'solr<=5')
optdepends=(
  'drupal: Solr client for these configuration files'
  'aegir: meta-Drupal hosting platform'
  'solr-undertow: high performance servlet container for Solr'
)
source=(
  "http://ftp.drupal.org/files/projects/search_api_$_pkgname-7.x-1.8.zip"
  "https://github.com/amateescu/search_api_$_pkgname/archive/8.x-1.x.zip"
  "https://raw.githubusercontent.com/apache/lucene-$_pkgname/branch_5x/$_pkgname/core/src/test-files/$_pkgname/collection1/conf/mapping-ISOLatin1Accent.txt"
  # The mapping-ISOLatin1Accent.txt file is identical in all occurrences in the Solr repo across the head of all its supported branches (3-5.x)
)
md5sums=('ea3f8918a37f5d581def933921870e2d'
         'b3806096d1e43de09ca8c49c4c601159'
         '9f3c8a60a4f09327fad22aeff082c2b3')

prepare() {
  [ -d "7.x" ] && rm -rf "7.x"
  [ -d "8.x" ] && rm -rf "8.x"
  mv -f "search_api_$_pkgname" "7.x"
  mv -f "search_api_$_pkgname-8.x-1.x" "8.x"
}

package() {
  # Traverse and install conf files for Drupal 7.x and 8.x, and for Solr 3.x, 4.x, and 5.x.
  for ver_drupal in *.x; do
    for ver_solr in $(basename -a $ver_drupal/$_pkgname-conf/*); do
      for file in $(basename -a $ver_drupal/$_pkgname-conf/$ver_solr/*); do
        install -Dm644 "$ver_drupal/$_pkgname-conf/$ver_solr/$file" "$pkgdir/etc/$_pkgname/configsets/drupal-$ver_drupal-$_pkgname-$ver_solr/conf/$file"
      done
      install -Dm644 mapping-ISOLatin1Accent.txt "$pkgdir/etc/$_pkgname/configsets/drupal-$ver_drupal-$_pkgname-$ver_solr/conf/mapping-ISOLatin1Accent.txt"
    done
  done

  # Reserve uid/gid 521 for the Solr system account.
  chown 521:521 "$pkgdir/etc/$_pkgname"
}

#~ Create new core with drupal config set
#~ http://localhost:8983/solr/admin/cores?action=CREATE&name=facet&instanceDir=/etc/solr-undertow/cores/facet&configSet=drupal-7.x-solr-5.x
