# Maintainer: jerry73204 <jerry73204@gmail.com>
# Contributor 1: Lee.MaRS <leemars@gmail.com>
# Contributor 2: Dominik Mayer <dominik.mayer@gmail.com>
# Contributor 3: Anuj More <anujmorex@gmail.com>

pkgname=google-appengine-java
pkgver=1.9.30
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc="Google App Engine SDK for Java"
url="http://code.google.com/appengine/"
license="Apache 2"
depends=('java-environment')
options=('!strip')
source=("https://commondatastorage.googleapis.com/appengine-sdks/featured/appengine-java-sdk-${pkgver}.zip"
        profile.appengine-java-sdk)
sha1sums=('6eefd77c558696227517cb6d92677ff10a8c88ec'
          'd80d2aa0c5f279456afb6baa58f5b7fb70ac8e71')

package() {
  cd "$srcdir"
  mkdir "$pkgdir/opt/"
  cp -R appengine-java-sdk-${pkgver}/ "$pkgdir/opt/$pkgname"

  install -D -m755 profile.appengine-java-sdk "$pkgdir/etc/profile.d/appengine-java-sdk.sh"
}
