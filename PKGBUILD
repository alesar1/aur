# Maintainer: Sainnhe Park <sainnhe@gmail.com>
pkgname=vim-coc
# Coc.nvim creates tags on release branch but the source code is only available on master branch, so I have to use commit hash to specify the version to use.
_hash='21a8e00b3c62faca4fdda5fa16b4f3ed4c03cf09'
pkgver=0.0.81
pkgrel=1
pkgdesc='Intellisense engine for Vim8 & Neovim, full language server protocol support as VSCode'
arch=('any')
url='https://github.com/neoclide/coc.nvim'
license=('MIT')
depends=('vim' 'nodejs')
optdepends=('npm: for installing coc extensions'
            'yarn: for installing coc extensions'
            'watchman: for workspace_didChangeWatchedFiles feature')
makedepends=('yarn')
provides=('vim-coc')
conflicts=('vim-coc')
source=("https://github.com/neoclide/coc.nvim/archive/${_hash}.zip")
sha256sums=('97374516741d70615a0878a7072307fe58e13f4d13333fb67f88a8f706972c76')

build() {
    cd "${srcdir}/coc.nvim-${_hash}"
    yarn install --frozen-lockfile --preferred-cache-folder "${srcdir}/.cache"
}

package() {
    cd "${srcdir}/coc.nvim-${_hash}"
    vim -es --cmd ":helptags doc" --cmd ":q"
    find autoload build data doc package.json plugin -type f -exec \
        install -Dm 644 '{}' "${pkgdir}/usr/share/vim/vimfiles/pack/coc/start/coc.nvim/{}" \;
    install -Dm 644 "${srcdir}/coc.nvim-${_hash}/LICENSE.md" \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.md"
}
