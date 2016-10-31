# Maintainer: Alex Talker <alextalker at opemailbox dot org>
# Contributor: Luis von Bernus <PaterSiul@gmail.com>
# Contributors: L42y, aeosynth, Dan Serban, Kalipath
_name=firefox
_channel=aurora
_milestone=51.0a2
_lang=ru
pkgname="${_name}-${_channel}-${_lang}"
_pkgname="${_name}-${_channel}"
pkgver=51.0a2.20161030004007
pkgrel=1
pkgdesc="Firefox Aurora channel - Nightly build"
url="http://www.mozilla.org/en_US/${_name}/${_channel}/"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
depends=('gtk3' 'libxt' 'startup-notification' 'mime-types' 'dbus-glib' 
	 'alsa-lib' 'dbus-glib' 'libnotify' 'desktop-file-utils' 'hicolor-icon-theme'
	 'libvpx' 'libevent' 'nss>=3.14.1' 'hunspell')
provides=('firefox-aurora' "firefox-aurora-${_lang}")
conflicts=('firefox-aurora')
install="${_pkgname}.install"

source=("${_pkgname}.desktop"
        "${_pkgname}-safe.desktop")

source_i686=('https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-aurora-l10n/firefox-51.0a2.ru.linux-i686.tar.bz2')
source_x86_64=('https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-aurora-l10n/firefox-51.0a2.ru.linux-x86_64.tar.bz2')

sha512sums=('1c0eef1129625ecfb70809dbb9ab764054d1680f05b7807f503145b5889bc42babb268cb4e2b7b102f90c50cc249114f773d91992e9ac41b5a6966e3b5c95675'
            '749bc9bb180909c7319a1576e9df1e4cb06488b33b8dd61b8f1a63e4df9208cb9bb6d0c4ecef3fbe388f78368aef4562ae1dbfda1dbbfa649aa9d247c4903610')

sha512sums_i686=('1ffc089fd714dc12e1ce514d3945f05426babfd6ad62ca2f395a555bd3419ab1090629544a64ed0fea45202d10fd433357450a899bf96a47eb5e204163128e12')
sha512sums_x86_64=('286fb1d2145098b9eda0f78e7764a4a1088c9db88d89f08f18f99bf653860aa8b54d1cc48166fedfbe71d96a964743802e5c1a61080c7e256be9127b8b70fbba')

pkgver() {
  cd "${_name}"
  echo "${_milestone}.$(cat platform.ini|grep BuildID|cut -d "=" -f2 )"
}

package() {
  _subname=${_name}-${_channel}
  install -d "${pkgdir}"/{usr/bin,opt}
  mv "${_name}" "${pkgdir}/opt/${_subname}"
  ln -s "/opt/${_subname}/${_name}" "${pkgdir}/usr/bin/${_subname}"
  install -Dm644 "${_subname}.desktop" "${pkgdir}/usr/share/applications/${_subname}.desktop"
  install -Dm644 "${_subname}-safe.desktop" "${pkgdir}/usr/share/applications/${_subname}-safe.desktop"
  install -Dm644 "${pkgdir}/opt/${_subname}/browser/icons/mozicon128.png" \
  		 "${pkgdir}/usr/share/pixmaps/${_subname}-icon.png"
}
