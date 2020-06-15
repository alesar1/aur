# Maintainer: Brian Bidulock <bidulock@openss7.org>
pkgname=xorg-xdm-xlogin
_pkgname=xorg-xdm
pkgver=1.1.12
pkgrel=2
pkgdesc="X Display Manager"
arch=(i686 x86_64)
#url="http://xorg.freedesktop.org/"
url="https://github.com/bbidulock/xdm"
license=('custom')
depends=('libbsd' 'pam' 'libxaw' 'libxinerama' 'xorg-xrdb' 'xorg-sessreg' 'libxft' 'systemd')
optdepends=('slim-xdm: for separate greeter')
provides=("${_pkgname}=${pkgver}")
conflicts=(${_pkgname})
makedepends=('pkgconfig' 'xorg-util-macros' 'xtrans')
backup=(etc/X11/xdm/Xaccess etc/X11/xdm/Xresources etc/X11/xdm/Xservers etc/X11/xdm/xdm-config etc/pam.d/xdm etc/pam.d/greeter etc/X11/xdm/Xsetup_0 etc/X11/xdm/Xsession)
source=("xdm.zip::https://github.com/bbidulock/xdm/archive/027536f4cdefe292adec15303198897d8ee4f1c8.zip"
	xdm.pam)
sha256sums=('9c3d08e459667037898a73826b1e6622c359d71b3f10b2e7d8b7aff3545d1718'
            'e8c4c5fd3b801a390d201166fd1fb9730e78a5c62928768103b870b6bd980ea0')

build() {
  cd xdm-*

  # FS#63867 XDM's default userPath / systemPath hid /usr/local
  unset DEF_USER_PATH

  ./autogen.sh --prefix=/usr \
      --sysconfdir=/etc \
      --disable-xdm-auth \
      --disable-static \
      --with-xdmconfigdir=/etc/X11/xdm \
      --with-xdmscriptdir=/etc/X11/xdm \
      --with-pixmapdir=/usr/share/xdm/pixmaps \
      DEF_USER_PATH="/usr/local/bin:/usr/bin:/bin" \
      DEF_SYSTEM_PATH="/usr/local/bin:/usr/bin:/bin"

  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

  make CWARNFLAGS=""
}

package() {
  cd xdm-*
  make DESTDIR="${pkgdir}" install
  install -m755 -d "${pkgdir}/var/lib/xdm"
  install -m755 -d "${pkgdir}/etc/pam.d"
  install -m644 "${srcdir}/xdm.pam" "${pkgdir}/etc/pam.d/xdm"
  install -m755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/"

  sed -i -e 's/\/X11R6//g' "${pkgdir}"/etc/X11/xdm/*

  sed -i 's|^Alias=.*|Alias=display-manager.service|' \
    "$pkgdir/usr/lib/systemd/system/xdm.service"
}
