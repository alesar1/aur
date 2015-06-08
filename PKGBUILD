# Maintainer: Shanto <shanto@hotmail.com>
# Contributor: Jesus Jerez <jerezmoreno@gmail.com>

pkgname=eclipse-pde
pkgver=4.4
pkgdate=201406061215
pkgrel=1
pkgdesc="Plug-in Development Environment - Separated from Eclipse SDK package. Use with eclipse-platform"
url="http://www.eclipse.org/pde/"
arch=('any')
license=('EPL')
depends=('eclipse-platform')
makedepends=('unzip')
options=(!strip)
source=("http://www.eclipse.org/downloads/download.php?r=1&file=/eclipse/downloads/drops4/R-${pkgver}-${pkgdate}/org.eclipse.pde-${pkgver}.zip")
md5sums=('2361263bdd3ba61108288a188b6fa282')

package() {

  _dest=${pkgdir}/usr/share/eclipse/dropins/${pkgname/eclipse-}/eclipse

  cd ${srcdir}

  # Features
  find features -type f | while read _feature ; do
    if [[ ${_feature} =~ (.*\.jar$) ]] ; then
      install -dm755 ${_dest}/${_feature%*.jar}
      cd ${_dest}/${_feature/.jar}
      jar xf ${srcdir}/${_feature} || return 1
    else
      install -Dm644 ${_feature} ${_dest}/${_feature}
    fi
  done

  # Plugins
  find plugins -type f | while read _plugin ; do
    install -Dm644 ${_plugin} ${_dest}/${_plugin}
  done

}
