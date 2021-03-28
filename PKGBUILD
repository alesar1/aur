# Maintainer: Sainnhe Park <sainnhe@gmail.com>
pkgname=neovim-coc-zsh-git
pkgver=r3.ef6b0ca
pkgrel=1
pkgdesc='coc.nvim source for Zsh completions'
arch=('any')
url='https://github.com/tjdevries/coc-zsh'
license=('unknown')
depends=('neovim-coc' 'zsh')
makedepends=('git')
provides=('neovim-coc-zsh')
conflicts=('neovim-coc-zsh')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/coc-zsh"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd "${srcdir}/coc-zsh"
    find autoload -type f -exec \
        install -Dm 644 '{}' "${pkgdir}/usr/share/nvim/runtime/pack/coc/start/coc-zsh/{}" \;
    find bin -type f -exec \
        install -Dm 755 '{}' "${pkgdir}/usr/share/nvim/runtime/pack/coc/start/coc-zsh/{}" \;
}
