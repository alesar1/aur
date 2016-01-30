# Maintainer: Rhinoceros <https://aur.archlinux.org/account/rhinoceros>
# Contributor: Michael Pusterhofer <pusterhofer at student dot tugraz dot at>

pkgname=vim-r
pkgver=1.2.7
pkgrel=3
pkgdesc="Improves Vim's support for editing R code and integrates Vim with R"
arch=('any')
url="http://www.vim.org/scripts/script.php?script_id=2628"
license=('unknown')
depends=('vim' 'r-vimcom=1.2_7' 'tmux')
optdepends=('pandoc: render output from markup files'
            'vim-csv: inspect data.frames and matrices')
source=("${pkgname}-${pkgver}.vmb::http://www.vim.org/scripts/download_script.php?src_id=23760")
sha256sums=('78354dc0dc5c5ab2a511feeb0d7960a7b975d8cba92316dea6dc880d57cd7ead')

package() {
  mkdir -p "${pkgdir}/usr/share/vim/vimfiles"
  vim -c "UseVimball ${pkgdir}/usr/share/vim/vimfiles" -c q \
    "${srcdir}/${pkgname}-${pkgver}.vmb"
  rm "${pkgdir}/usr/share/vim/vimfiles/.VimballRecord"
  rm "${pkgdir}/usr/share/vim/vimfiles/doc/tags"
}
