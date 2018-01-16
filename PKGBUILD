# Maintainer: Vic Luo <vicluo96 at gmail.com>

pkgname=cquery-git
_pkgname=cquery
pkgver=1177.2533f13
pkgrel=1
pkgdesc='Low-latency vscode language server for large C++ code-bases, powered by libclang.'
arch=('any')
url='https://github.com/jacobdufault/cquery/'
license=('MIT')
depends=('clang')
makedepends=("git" "python" "llvm")
source=('git+https://github.com/jacobdufault/cquery.git#branch=master')
md5sums=(
    'SKIP'
)

pkgver() {
    cd $_pkgname
    printf "%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd $_pkgname
    git submodule update --init
    sed -e "s/, '-Werror'//g" -i ./wscript
}

build() {
    cd $_pkgname
    python waf configure --prefix="$pkgdir/usr" --use-system-clang
    python waf build
}

check() {
    cd $_pkgname
    yes | build/release/bin/cquery --test-unit --test-index --clang-sanity-check
}

package() {
    cd $_pkgname
    python waf install
}
