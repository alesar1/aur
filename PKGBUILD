# Maintainer: Kirill Goncharov <kdgoncharov at gmail dot com>

pkgname=mermaid-cli
pkgver=8.8.0
pkgrel=2
pkgdesc='Generation of diagram and flowchart from text in a similar manner as markdown (CLI)'
arch=('any')
url='https://github.com/mermaid-js/mermaid-cli'
license=('MIT')
depends=('nodejs')
makedepends=('npm')
_npmscope=@mermaid-js
_npmname=mermaid-cli
_npmver=8.8.0
source=("http://registry.npmjs.org/${_npmscope}/${_npmname}/-/${_npmname}-${_npmver}.tgz")
sha256sums=('bceb2793cd147064427a660db6b9f44ac726cc210dbf01d8be7314b2de2b4206')
noextract=('${_npmname}-${_npmver}.tgz')

package() {
    npm install --global --production --user root --prefix "${pkgdir}/usr" "${_npmname}-${_npmver}.tgz"

    # -> https://wiki.archlinux.org/index.php/Node.js_package_guidelines
    # Non-deterministic race in npm gives 777 permissions to random directories.
    # See https://github.com/npm/npm/issues/9359 for details.
    find "${pkgdir}"/usr -type d -exec chmod 755 {} +
    # npm gives ownership of ALL FILES to build user
    # https://bugs.archlinux.org/task/63396
    chown -R root:root "$pkgdir"
}
