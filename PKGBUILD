# Maintainer: Chris Down <chris@chrisdown.name>

pkgname=pyenv
pkgver=1.0.6
pkgrel=1
pkgdesc='Simple Python version management'
arch=('any')
url='https://github.com/yyuu/pyenv'
license=('MIT')
optdepends=('mercurial: to install dev builds')
depends=()
source=("https://github.com/yyuu/pyenv/archive/v${pkgver}.zip")
md5sums=('bf22ede568e6c8c95888a78454bfdf0d')

package() {
    mkdir -p "${pkgdir?}"/{opt/pyenv,usr/bin}
    cd "${srcdir?}/$pkgname-$pkgver" || return
    cp -a -- * "$pkgdir"/opt/pyenv
    ln -s /opt/pyenv/libexec/pyenv "$pkgdir/usr/bin/pyenv"

    for bin in pyenv-{,un}install python-build; do
        ln -s /opt/pyenv/plugins/python-build/bin/"$bin" "$pkgdir/usr/bin/$bin"
    done
}
