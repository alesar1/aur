# Maintainer: Kirill Goncharov <kdgoncharov at gmail dot com>

pkgname=mermaid-cli
pkgver=8.10.1
pkgrel=1
pkgdesc='Generation of diagram and flowchart from text in a similar manner as markdown (CLI)'
arch=('any')
url='https://github.com/mermaid-js/mermaid-cli'
license=('MIT')
depends=('nodejs')
makedepends=('npm')
_npmscope=@mermaid-js
_npmname=mermaid-cli
_npmver=$pkgver
source=("http://registry.npmjs.org/${_npmscope}/${_npmname}/-/${_npmname}-${_npmver}.tgz")
sha256sums=('01a3fc212dabcba498942f9e2520f24b26758151a0f9b3ab82c1c1fe85ad3150')
noextract=("${_npmname}-${_npmver}.tgz")

package() {
    npm install --global --production --prefix "${pkgdir}/usr" "${_npmname}-${_npmver}.tgz"

    # -> https://wiki.archlinux.org/index.php/Node.js_package_guidelines
    # Non-deterministic race in npm gives 777 permissions to random directories.
    # See https://github.com/npm/cli/issues/1103 for details.
    find "${pkgdir}/usr" -type d -exec chmod 755 {} +
    # npm gives ownership of ALL FILES to build user
    # https://bugs.archlinux.org/task/63396
    chown -R root:root "${pkgdir}"
}
