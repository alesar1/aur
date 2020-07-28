# Maintainer: Sainnhe Park <sainnhe@gmail.com>
pkgname=vim-coc
pkgver=0.0.78
pkgrel=4
pkgdesc='Intellisense engine for Vim8 & Neovim, full language server protocol support as VSCode'
arch=('any')
url='https://github.com/neoclide/coc.nvim'
license=('MIT')
depends=('vim' 'nodejs')
optdepends=('npm: for installing coc extensions'
            'yarn: for installing coc extensions'
            'vim-coc-extras-meta-git: some basic extensions')
provides=('vim-coc')
conflicts=('vim-coc')
source=('https://github.com/neoclide/coc.nvim/archive/v0.0.78.tar.gz'
        'coc-vim-doc.hook')
sha256sums=('1e9634b9c5de3557d8ecf3057fcaa1958d70a8d433eec2da19d88f8d486c2695'
            '71348fe1287df827e7b28c41a0659e0cc8ff541623c3e1cc8fbfc84346199b1d')

build() {
    cd "${srcdir}/coc.nvim-${pkgver}"
    touch doc/tags doc/tags-cn
}

package() {
    cd "${srcdir}/coc.nvim-${pkgver}"
    find autoload bin build data doc package.json plugin -type f -exec \
        install -Dm 644 '{}' "${pkgdir}/usr/share/vim/vimfiles/pack/coc/start/coc.nvim/{}" \;
    install -Dm 644 "${srcdir}/coc.nvim-${pkgver}/LICENSE.md" \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.md"
    install -Dm 644 "${srcdir}"/coc-vim-doc.hook "${pkgdir}"/usr/share/libalpm/hooks/coc-vim-doc.hook
}
