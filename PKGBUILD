# Maintainer:  Sapphira Armageddos <shadowkyogre.public@gmail.com>
# Contributor: martadinata666 <martadinata666@gmail.com>

_use_marco=0

_upstream="compiz"
_pkgver=0.8.12
_micro=.3

pkgbase=compiz-core
pkgname=(compiz-core compiz-gtk)
pkgver="${_pkgver}${_micro}"
pkgrel=3
pkgdesc="This is the latest stable release of Compiz without DE deps"
url="https://github.com/compiz-reloaded/${_upstream}/"
license=('GPL' 'LGPL' 'MIT')
arch=('i686' 'x86_64')
depends=('startup-notification' 'librsvg' 'dbus' 'glu' 'libxslt' 'libxrandr' 'libsm' 'libxcomposite' 'libxinerama')
makedepends=('intltool' 'libice')
options=(!libtool !emptydirs)
source=("${url}/releases/download/v${pkgver}/${_upstream}-${pkgver}.tar.xz")

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

build()
{
  cd "${srcdir}/${_upstream}-${pkgver}"

  NOCONFIGURE=1 ./autogen.sh
  ./configure "${_configure_opts[@]}"

  if ! grep -q pkg_cv_GTK config.log;then
    # make sure only compiz-core is created if gtk is missing
    msg "Making sure only $pkgbase is made, gtk+2 or gtk+3 is missing"
    pkgname=("$pkgbase")
  fi
  make
}

package_compiz-core() {
  cd "${srcdir}/${_upstream}-${pkgver}"

  pkgdesc+=" (Core w/o decorator)"
  provides=("compiz-core=$pkgver")
  conflicts=('compiz' 'compiz-core-git' 'compiz-git')

  make DESTDIR="${pkgdir}" install

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

package_compiz-gtk()
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
  conflicts=('compiz-gtk-git')

  cd "${srcdir}/${_upstream}-${pkgver}/gtk"
  make DESTDIR="${pkgdir}" install

  cd "${srcdir}/${_upstream}-${pkgver}/images"
  make DESTDIR="${pkgdir}" install

  local REMOVE_THESE=(
    "${pkgdir}/usr/share/icons/hicolor/"*"/apps/compiz."*
    "${pkgdir}/usr/share/compiz/"*.png
    "${pkgdir}/usr/share/applications/compiz.desktop"
  )
  # Believe it or not, you CAN fill an array using wildcards in bash

  for fname in "${REMOVE_THESE[@]}";do
    if [ -e "$fname" ];then
      rm "$fname"
    fi
  done
}

sha256sums=('6fc5176e3af5d6f434f26d1b654460aeeb3faf723db37f0957b46c2c23955032')
