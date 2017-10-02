# Maintainer: jsteel <mail at jsteel dot org>
# Contributor: nblock <nblock [/at\] archlinux DOT us>
# Contributor: William Díaz <wdiaz [at] archlinux [dot] us>
# Contributor: Wolfgang Frisch <xororand@frexx.de>
# Contributor: Leandro Inacio <carvalho.inacio@gmail.com>

# This package is based on gentoo's app-vim/colorschemes.
#
# The source tarball is generated by upstream using the following script:
#   https://github.com/radhermit/gentoo-vim-scripts/blob/master/get-colorschemes

pkgname=vim-colorschemes
pkgver=r183.d941e52
pkgrel=2
pkgdesc="A very large collection of color schemes from vim.org"
url="https://github.com/flazz/vim-colorschemes/"
arch=('any')
conflicts=('vim-colorsamplerpack' 'vim-solarized-git' 'tomorrow-theme-vim-git')
depends=('vim')
license=('vim' 'GPL2' 'public-domain' 'as-is')
groups=('vim-plugins')
source=("git+https://github.com/solaraquarion/vim-colorschemes.git#commit=d941e5224b51df56f753d3498c90102aa8e2f0e3")
md5sums=('SKIP')

pkgver(){
   cd "$pkgname"
   printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

       }

build() {
  cd "$srcdir"/vim-colorschemes
  # fix line endings
  find . -name '*.vim' -exec sed -i -e 's,\r,\n,g' {} \;
}

package() {
  cd "$srcdir"/vim-colorschemes

  install -dm755 "$pkgdir"/usr/share/vim/vimfiles/colors
  install -m644 colors/* "$pkgdir"/usr/share/vim/vimfiles/colors/

  # delete existing colors
  rm -r "$pkgdir"/usr/share/vim/vimfiles/colors/{blue.vim,delek.vim,desert.vim,torte.vim}
}
