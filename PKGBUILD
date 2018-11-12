# Maintainer: Emmanuel Gil Peyrot <linkmauve@linkmauve.fr>
# Co-Maintainer: Maxime "pep" Buquet <archlinux@bouah.net>

pkgname=(conversejs-git conversejs-epiphany-git)
pkgver=4.0.0.r2.gdbe88535f
pkgrel=1
arch=('any')
url="https://conversejs.org/"
license=('MPL2')
makedepends=('git' 'npm' 'ruby-rdoc')
source=('git+https://github.com/conversejs/converse.js'
        'launcher.sh'
        'launcher.desktop')
sha256sums=('SKIP'
            'c60e2d176324ac7438f8518e8ea5095255cd6a02d93c1bf62a0e76ff71d0eacc'
            'efa2f4cee2e33082936df006a9553bf5a276b6a1f85fee4d2bcfbcad0483effb')

pkgver() {
  cd converse.js
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd converse.js
  rm -rf dist
  rm -f css/converse*
  make dev
  make dist/converse.min.js
  make css/converse.min.css
  rm -v css/converse.css
  gzip -vk9 dist/converse.min.js \
    css/converse.min.css \
    css/images/*.svg \
    locale/*/LC_MESSAGES/converse.json
}

package_conversejs-git() {
  pkgdesc='Web-based XMPP/Jabber chat client written in javascript'

  cd converse.js
  install -dm755 "$pkgdir"/usr/share/webapps/converse.js/
  cp -r dist "$pkgdir"/usr/share/webapps/converse.js/
  cp -r css "$pkgdir"/usr/share/webapps/converse.js/
  cp -r locale "$pkgdir"/usr/share/webapps/converse.js/
  cp -r sounds "$pkgdir"/usr/share/webapps/converse.js/
  cp -r fonts "$pkgdir"/usr/share/webapps/converse.js/

  install -Dm644 fullscreen.html "$pkgdir"/usr/share/webapps/converse.js/
}

package_conversejs-epiphany-git() {
  depends=('epiphany' 'conversejs-git' 'python')
  pkgdesc='Desktop launcher for Converse.js'

  install -Dm755 ../launcher.sh "$pkgdir"/usr/bin/conversejs
  install -Dm644 ../launcher.desktop "$pkgdir"/usr/share/applications/conversejs.desktop
}
