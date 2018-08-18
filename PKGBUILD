# Maintainer: orumin <dev@orum.in>
# Maintainer: Adam <adam900710@gmail.com>

_basename=gst-plugins-ugly
pkgname="lib32-$_basename"
pkgver=1.14.1
pkgrel=2
pkgdesc="GStreamer Multimedia Framework Ugly Plugins (32-bit)"
arch=('x86_64')
license=('LGPL')
url="https://gstreamer.freedesktop.org/"
depends=('lib32-gst-plugins-base-libs' 'lib32-libdvdread' 'lib32-lame' 'lib32-libmpeg2' 'lib32-a52dec' 'lib32-libmad' 'lib32-libsidplay'
         'lib32-libcdio' 'lib32-libx264' 'lib32-opencore-amr' 'lib32-mpg123' 'gst-plugins-ugly')
makedepends=('python' 'lib32-libx264' 'autoconf-archive' 'git' 'valgrind-multilib')
_commit=005effc365d48964271a7a028d62e5e13da976d3	# tags/1.14.1
source=("git+https://anongit.freedesktop.org/git/gstreamer/gst-plugins-ugly#commit=$_commit"
        "gst-common::git+https://anongit.freedesktop.org/git/gstreamer/common")
sha256sums=('SKIP'
            'SKIP')
pkgver() {
  cd $_basename
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd $_basename

  git submodule init
  git config --local submodule.common.url "$srcdir/gst-common"
  git submodule update

  NOCONFIGURE=1 ./autogen.sh
}

build() {
  cd $_basename

  export CC='gcc -m32'
  export CXX='g++ -m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

  ./configure \
	--prefix=/usr \
	--sysconfdir=/etc \
	--localstatedir=/var \
	--libexecdir=/usr/lib32 \
	--libdir=/usr/lib32 \
	--build=i686-pc-linux-gnu \
	--with-package-name="GStreamer Ugly Plugins (Arch Linux)" \
	--with-package-origin="http://www.archlinux.org/" \
	--with-x265-libraries="/usr/lib32/x264/libx264-8bit.so:/usr/lib32/x264/libx264-10bit.so" \
	--enable-experimental \
	--disable-gtk-doc \
	--disable-static

  # https://bugzilla.gnome.org/show_bug.cgi?id=655517
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

  make
}

#check() {
#  cd $_basename
#  make check
#}

package() {
  cd $_basename
  make DESTDIR="${pkgdir}" install

  rm -r "$pkgdir"/usr/share
}
