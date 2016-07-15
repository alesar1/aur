# Maintainer:  Sapphira Armageddos <shadowkyogre.public@gmail.com>
# Contributor: martadinata666 <martadinata666@gmail.com>

_use_marco=0

_upstream="compiz"

pkgbase=compiz-core-git
pkgname=(compiz-core-git compiz-gtk-git)
pkgver=0.8.12.3.r24.g292d9a2
pkgrel=2
pkgdesc="This is the latest git release of Compiz without DE deps"
url="https://github.com/compiz-reloaded/${_upstream}"
license=('GPL' 'LGPL' 'MIT')
arch=('i686' 'x86_64')
depends=('startup-notification' 'librsvg' 'dbus' 'glu' 'libxslt' 'libxrandr' 'libsm' 'libxcomposite' 'libxinerama')
makedepends=('intltool' 'libice')
options=(!libtool !emptydirs)
provides=("compiz-core=$pkgver")
source=(
	"git+https://github.com/compiz-reloaded/${_upstream}.git"
)

sha1sums=('SKIP')

_configure_opts=(
  --prefix=/usr
  --enable-shared
  --enable-dbus
  --enable-dbus-glib
  --enable-librsvg
  --enable-glib
  --disable-static
  --disable-inotify
)

if (("${_use_marco}" == 1));then
  _configure_opts+=("--enable-marco")
  makedepends+=("marco")
  msg "Marco theme support enabled"
elif (("${_use_marco}" == 2));then
  _configure_opts+=("--enable-marco")
  _configure_opts+=("--with-gtk=3.0")
  makedepends+=("marco-gtk3")
  msg "Marco theme support enabled with GTK+3"
else
  _configure_opts+=("--disable-marco")
  msg "Marco theme support disabled, rebuild with _use_marco=1 in the PKGBUILD if you want it"
  msg "Rebuild with _use_marco=2 in the PKGBUILD if you have marco-gtk3"
fi

pkgver() {
  cd "${srcdir}/${_upstream}"
  git describe --long --tags|sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build()
{
  cd "${srcdir}/${_upstream}"

  NOCONFIGURE=1 ./autogen.sh
  ./configure "${_configure_opts[@]}"

  if ! grep -q pkg_cv_GTK config.log;then
    # make sure only compiz-core-git is created if gtk is missing
    msg "Making sure only $pkgbase is made, gtk+2 or gtk+3 is missing"
    pkgname=("$pkgbase")
  fi

  make
}

package_compiz-core-git() {
  cd "$srcdir/${_upstream}"

  pkgdesc+=" (Core w/o decorator)"
  provides=("compiz-core=$pkgver")
  conflicts=('compiz' 'compiz-core')

  make DESTDIR="$pkgdir" install

  local REMOVE_THESE=(
    "${pkgdir}/usr/bin/gtk-window-decorator"
    "${pkgdir}/usr/share/glib-2.0/schemas/org.compiz-0.gwd.gschema.xml"
    "${pkgdir}/usr/share/icons/hicolor/"*"/apps/gtk-decorator."*
  )
  # Believe it or not, you CAN fill an array using wildcards in bash

  for fname in "${REMOVE_THESE[@]}";do
    if [ -e "$fname" ];then
      rm "$fname"
    fi
  done
}

package_compiz-gtk-git()
{
  #separating libmarco-private would be nice, but this is a workaround for now
  if (("${_use_marco}" == 1));then
    depends+=('marco')
  elif (("${_use_marco}" == 2));then
    depends+=('marco-gtk3')
  else
    depends+=('gtk2')
  fi
  pkgdesc+=" (GTK+ window decorator)"
  provides=("compiz-gtk=$pkgver")
  conflicts=('compiz-gtk')

  cd "${srcdir}/${_upstream}/gtk-window-decorator"
  make DESTDIR="${pkgdir}" install

  cd "${srcdir}/${_upstream}/images"
  make DESTDIR="${pkgdir}" install

  local REMOVE_THESE=(
    "${pkgdir}/usr/share/icons/hicolor/"*"/apps/compiz."*
    "${pkgdir}/usr/share/compiz/"*.png
  )
  # Believe it or not, you CAN fill an array using wildcards in bash

  for fname in "${REMOVE_THESE[@]}";do
    if [ -e "$fname" ];then
      rm "$fname"
    fi
  done
}
