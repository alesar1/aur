# Maintainer:  Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=2p-kt
pkgver=0.20.2
pkgrel=1
pkgdesc='A Kotlin Multi-Platform ecosystem for symbolic AI'
arch=('any')
url='https://github.com/tuProlog/2p-kt'
license=('Apache')
depends=('java-runtime' 'bash')
makedepends=('gendesk')
source=(
  "2p-repl-${pkgver}.jar::${url}/releases/download/${pkgver}/2p-repl-${pkgver}-redist.jar",
  "2p-ide-${pkgver}.jar::${url}/releases/download/${pkgver}/2p-ide-${pkgver}-redist.jar"
)
noextract=("${pkgname}-${pkgver}.tar.gz")
sha256sums=(
  'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
)

package() {
  echo "#!/bin/sh
  exec /usr/bin/java -jar '/usr/share/java/${pkgname}/2p-repl.jar' \"\$@\"" > "2p-repl"
  install -Dm755 2p-repl-${pkgver}.jar "${pkgdir}/usr/share/java/${pkgname}/2p-repl.jar"
  install -Dm755 2p-repl "${pkgdir}/usr/bin/2p-repl"

  echo "#!/bin/sh
  exec /usr/bin/java -jar '/usr/share/java/${pkgname}/2p-ide.jar' \"\$@\"" > "2p-ide"
  install -Dm755 2p-ide-${pkgver}.jar "${pkgdir}/usr/share/java/${pkgname}/2p-ide.jar"
  install -Dm755 2p-ide "${pkgdir}/usr/bin/2p-ide"
}
