# Maintainer: Nick Østergaard <oe.nick at gmail dot com>

pkgname=openocd-git-libftdi
pkgver=20120126
pkgrel=1
pkgdesc="Debugging, in-system programming and boundary-scan testing for embedded target devices -using libftdi instead of ftd2xx"
arch=('i686' 'x86_64')
url="http://openocd.berlios.de/web/"
license=('GPL')
depends=('libftdi')
#makedepends=('git' 'automake>=1.9' 'tcl')
makedepends=('git' 'automake1.10' 'tcl') # This is a temporary hax, see further down
provides=('openocd')
conflicts=('openocd')
source=()
md5sums=()
options=(!strip)

_gitroot=git://openocd.git.sourceforge.net/gitroot/openocd/openocd
_gitname=openocd

build() {
  cd ${srcdir}

  msg "Connecting to GIT server..."
  if [[ -d $srcdir/$pkgname-$pkgver ]]; then
    cd $srcdir/$pkgname-$pkgver && git pull origin || return 1
  else
    git clone $_gitroot $srcdir/$pkgname-$pkgver || return 1
    cd $srcdir/$pkgname-$pkgver
  fi

  msg "GIT checkout done or server timeout"

  #
  # Build Jim Tcl
  #

  git submodule init
  git submodule update
  cd jimtcl
  ./configure --prefix=/usr --with-jim-ext=nvp
  make
  make DESTDIR=${pkgdir}/ install
  
  #
  # Build OpenOCD
	#
  cd $srcdir/$pkgname-$pkgver

	# This is the hax that makes it build, since automake 1.11.2 is not working properly
	sed -i s/^aclocal/aclocal-1.10/g bootstrap
	sed -i s/^automake/automake-1.10/g bootstrap

  ./bootstrap
  ./configure \
	--disable-werror \
	--prefix=/usr \
	--enable-maintainer-mode \
	--enable-parport \
	--enable-ft2232_libftdi \
	--enable-amtjtagaccel \
	--enable-ep93xx \
	--enable-at91rm9200 \
	--enable-gw16012 \
	--enable-presto_libftdi \
	--enable-usbprog \
	--enable-oocd_trace \
	--enable-jlink \
	--enable-vsllink \
	--enable-rlink \
	--enable-stlink \
	--enable-arm-jtag-ew \
	--enable-buspirate \
	--enable-usb_flaster_libftdi \
	--enable-stlink
  make
  make DESTDIR=${pkgdir}/ install 
  rm -rf ${srcdir}/$_gitname-build
  rm -rf $pkgdir/usr/share/info/dir	
}
