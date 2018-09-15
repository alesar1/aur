# Maintainer: Filipe Laíns (FFY00) <filipe.lains@gmail.com>
# Contributor: Iru Cai <mytbk920423@gmail.com>
# Contributor: Alexander Hunziker <alex.hunziker@gmail.com>
# Contributor: Alessio Biancalana <dottorblaster@gmail.com>

pkgname=gimp-git
_pkgname=${pkgname%-git}
epoch=1
pkgver=3.0.r42265.ff56a3af8d
pkgrel=1
pkgdesc="GNU Image Manipulation Program"
arch=('i686' 'x86_64')
url="https://www.gimp.org"
license=('GPL' 'LGPL')
depends=('pygtk' 'lcms2>=2.2' 'libwmf>=0.2.8' 'icu' 'enchant'
         'libgexiv2' 'librsvg>=2.16.1' 'desktop-file-utils'
         'libexif>=0.6.15' 'libart-lgpl>=2.3.19' 'dbus-glib' 'gtk-doc'
         'poppler-glib' 'poppler-data' 'openexr>=1.6.1' 'mypaint-brushes>=1.3.0'
         'babl>=0.1.57' 'gegl>=0.4.9' 'cairo>=1.14' 'appstream-glib>=0.7.7')
makedepends=('git' 'gutenprint>=5.0.0' 'intltool>=0.40.1' 'gnome-python>=2.16.2'
             'alsa-lib>=1.0.0' 'libxslt' 'glib-networking'
             'alsa-lib' 'curl' 'ghostscript' 'libxpm' 'webkit2gtk'
             'libheif' 'libwebp' 'libmng' 'iso-codes' 'aalib' 'zlib')
checkdepends=('xorg-server-xvfb')
optdepends=('gutenprint: for sophisticated printing only as gimp has built-in cups print support'
            'alsa-lib: for MIDI event controller module'
            'curl: for URI support'
            'ghostscript: for postscript support'
            'libxpm: XPM support'
            'webkit2gtk: HTML renderer and web content engine'
            'libheif: HEIF support'
            'libwebp: WebP support'
            'libmng: MNG support'
            'iso-codes: Language support'
            'aalib: ASCII art support'
            'zlib: Compression routines')
provides=('gimp')
conflicts=('gimp')
source=('git+https://gitlab.gnome.org/GNOME/gimp.git'
        'linux.gpl')
sha512sums=('SKIP'
            '6f33d57f242fa8ce04b65e06a712bd54677306a45b22cb853fbe348089cd4673bd4ed91073074fe067166fe8951c370f8bbbc386783e3ed5170d52e9062666fe')

pkgver() {
  cd $_pkgname

  printf "%s.r%s.%s" \
  	$(cat configure.ac | grep '^m4_define(\[gimp_api_version\], \[.*\])' | sed -e 's|m4_define(\[gimp_api_version\], \[||' -e 's|\])||') \
  	$(git rev-list --count HEAD) \
  	$(git rev-parse --short HEAD)
}

prepare() {
  cd $_pkgname

  _mypaintver=$(echo /usr/lib/libmypaint-*.so | grep -o -E '\-[0-9]+(\.[0-9]+)*' | head -1)
  sed -i "s|\\(libmypaint\\)\\( >= libmypaint_required_version\\)|\\1${_mypaintver}\\2|g" configure.ac

  export PYTHON=/usr/bin/python2

  autoreconf -vif

  ./configure \
  	--prefix=/usr \
  	--sysconfdir=/etc \
  	--libexecdir=/usr/bin \
  	--enable-mp \
  	--enable-gimp-console \
  	--enable-gimp-remote \
  	--enable-python \
  	--enable-gtk-doc \
  	--with-gif-compression=lzw \
  	--with-libcurl \
  	--with-openexr

  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
}

build() {
  cd $_pkgname

  PYTHONPATH=/usr/share/glib-2.0:$PYTHONPATH make
}

#check() {
#  cd $_pkgname
#
#  xvfb-run make check
#  xvfb-run make distcheck
#}

package() {
  cd $_pkgname

  make DESTDIR="$pkgdir" install

  install -Dm 644 "$srcdir"/linux.gpl "$pkgdir"/usr/share/gimp/2.0/palettes/Linux.gpl

  ln -s gimptool-2.0 "$pkgdir"/usr/bin/gimptool
  ln -sf gimptool-2.0.1.gz "$pkgdir"/usr/share/man/man1/gimptool.1.gz
}

