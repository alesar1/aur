# Maintainer: xuhcc <xuhcc at cryptolab dot net>

pkgname=mermaid-cli
pkgver=9.1.4
pkgrel=1
pkgdesc='Generation of diagram and flowchart from text in a similar manner as markdown (CLI)'
arch=('any')
url='https://github.com/mermaid-js/mermaid-cli'
license=('MIT')
depends=('nodejs' 'chromium')
makedepends=('npm' 'chromium')
_npmscope=@mermaid-js
_npmname=mermaid-cli
_npmver=$pkgver
source=("http://registry.npmjs.org/${_npmscope}/${_npmname}/-/${_npmname}-${_npmver}.tgz")
sha256sums=('ba75d953a25986ba20c17d60ca70adefea8c3fec6f4c4eabdb8ce52dd04857ed')
noextract=("${_npmname}-${_npmver}.tgz")

package() {
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install --global --production --prefix "${pkgdir}/usr" "${_npmname}-${_npmver}.tgz"
    sed -i "s#let puppeteerConfig = {}#let puppeteerConfig = { executablePath: '$(which chromium)' }#g" "${pkgdir}/usr/lib/node_modules/@mermaid-js/mermaid-cli/index.bundle.js"

    # -> https://wiki.archlinux.org/index.php/Node.js_package_guidelines
    # Non-deterministic race in npm gives 777 permissions to random directories.
    # See https://github.com/npm/cli/issues/1103 for details.
    find "${pkgdir}/usr" -type d -exec chmod 755 {} +
    # npm gives ownership of ALL FILES to build user
    # https://bugs.archlinux.org/task/63396
    chown -R root:root "${pkgdir}"
}
