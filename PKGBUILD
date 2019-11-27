# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Giovanni Scafora <giovanni@archlinux.org>
# Contributor: Maël Lavault <moimael@neuf.fr>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=abiword-git
pkgver=20538.2f5f90ed1
pkgrel=1
pkgdesc="Fully-featured word processor from official gnome gitlab mirror"
arch=('i686' 'x86_64')
url="http://www.abisource.com"
license=('GPL')
depends=('wv' 'goffice' 'redland' 'libical' 'loudmouth' 'enchant' 'libwpg'
	 'libwmf' 'link-grammar' 'gtkmathview' 'aiksaurus' 'libots'
	 'libchamplain' 'psiconv' 'telepathy-glib' 'libwps')
makedepends=('git' 'asio' 'boost' 'gobject-introspection' 'python2' 'libwpd')
provides=('abiword' 'abiword-plugins')
conflicts=('abiword' 'abiword-plugins')
source=("git+https://gitlab.gnome.org/World/AbiWord.git"
	'aiksaurus-plugin.m4::https://git.archlinux.org/svntogit/packages.git/plain/trunk/aiksaurus-plugin.m4?h=packages/abiword' 
	'command-plugin.m4::https://git.archlinux.org/svntogit/packages.git/plain/trunk/command-plugin.m4?h=packages/abiword' in_chroot.patch)
sha256sums=('SKIP'
            '5f80a2f94f9929cdba9809c5e1a87cd5d537a2518bb879bfb9eab51a71c8dac1'
            '2f26826e9d59d80dacd0dae4aceb815804eaa75954e47507a0897794f33e45be'
            '2644cb2ce1eb2ad1c4dbe6ba1711375f700d050dd5f6c73b1a128361cc82d351')

pkgver() {
  cd AbiWord
  printf "%s.%s" $(git rev-list --count HEAD) $(git rev-parse --short HEAD)
}

prepare() {
  cd AbiWord
  # Install missing m4 files
  install -m644 ../aiksaurus-plugin.m4 plugins/aiksaurus/plugin.m4
  install -m644 ../command-plugin.m4 .
  
  # Generate m4 file for configure
  find plugins -name plugin.m4 | xargs cat > plugin-list.m4
  git apply "$srcdir"/in_chroot.patch || true
}

build() {
  cd AbiWord
  export CXXFLAGS+=" -O3 "
  NOCONFIGURE=1 ./autogen.sh
  ./configure --prefix=/usr \
	      --enable-shared \
	      --disable-static \
	      --enable-clipart \
	      --enable-templates \
	      --enable-plugins="hrtext google bmp xslfo command pdf \
                          passepartout eml wordperfect psion aiksaurus s5 \
                          sdw opml garble latex epub wikipedia gimp \
                          opendocument paint mswrite wmf mif freetranslation \
                          ots wpg kword gdict collab iscii goffice pdb \
                          openwriter t602 presentation mathview \
                          openxml wml mht applix loadbindings urldict \
                          clarisworks docbook hancom babelfish" \
	      --enable-introspection 
  make
}

package() {
  cd AbiWord
  make DESTDIR="$pkgdir/" install
}
