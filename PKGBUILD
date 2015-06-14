# Maintainer: ssfdust <ssfdust@gmail.com>
pkgname=ycm-generator-git
pkgbase=ycm-generator-git
pkgver=stable57.6aecb04
pkgrel=1
pkgdesc="Generates config files for YouCompleteMe (https://github.com/Valloric/YouCompleteMe)"
arch=('any')
url="https://github.com/rdnetto/YCM-Generator"
license=('GPL')
depends=('make' 'python2' 'clang')
install=ycm-generator.install
makedepends=('git')
optdepends=('cmake' 'autoconf' 'automake') 
provides=('ycm-generator-git' 'ycm-generator')
source=("git://github.com/ssfdust/YCM-Generator.git")
md5sums=('SKIP')

pkgver() {
	cd $srcdir/YCM-Generator/
	printf "stable%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd $srcdir/YCM-Generator/
	DESTDIR="$pkgdir"/usr/share/YCM-Generator 
	VIMPLUGIN="$pkgdir"/usr/share/vim/vimfiles/plugin
	sed "s/expand(\"<sfile>:p:h:h\")/\"\/usr\/share\/YCM\-Generator\/\"/g" -i plugin/ycm-generator.vim 
	mkdir -p $DESTDIR
	mkdir -p $VIMPLUGIN
	cp -r * $DESTDIR

	#move vim plugin directory
	mv $DESTDIR/plugin/* $VIMPLUGIN
}
