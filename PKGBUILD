# Maintainer: Philipp Claßen <philipp.classen@posteo.de>
pkgname=apache-gremlin-console
pkgver=3.4.3
pkgrel=1
pkgdesc="Gremlin console from Apache TinkerPop "
arch=('any')
url="https://tinkerpop.apache.org"
license=('Apache')

depends=('bash' 'java-environment')
makedepends=()
source=(https://www.apache.org/dist/tinkerpop/${pkgver}/apache-tinkerpop-gremlin-console-${pkgver}-bin.zip)
sha256sums=('2f2dba3ad91ce5e2da4e5c905b4a69f56ed157d0fa35dbf0c8aa60ce77b1953f')

package() {
  cd apache-tinkerpop-gremlin-console-${pkgver}

  mkdir -p "${pkgdir}/usr/share/${pkgname}/bin"
  cp bin/gremlin.sh "${pkgdir}/usr/share/${pkgname}/bin"
  
  for i in conf data ext lib ; do
    cp -R "$i" "${pkgdir}/usr/share/${pkgname}"
  done

  mkdir -p "${pkgdir}/usr/bin"
  printf "#!/bin/sh\ncd /usr/share/${pkgname}/bin\n./gremlin.sh \"\$@\"" > "${pkgdir}/usr/bin/gremlin"
  chmod 755 "${pkgdir}/usr/bin/gremlin"

  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
