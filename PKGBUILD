# Maintainer: Icaro Perseo <icaroperseo[at]protonmail[dot]com>
# Forked from @xenom PKGBUILD, contributor of firefox-nightly

# Before you complain about unverifiable signature, please read Allan's post:
# http://allanmcrae.com/2015/01/two-pgp-keyrings-for-package-management-in-arch-linux/
# TL;DR: gpg --keyserver pgp.mit.edu --recv-keys 14F26682D0916CDD81E37B6D61B7B526D98F0353

_name=firefox
_channel=developer
_lang=es-ES
pkgname="${_name}-${_channel}-${_lang,,}"
pkgdesc="Standalone web browser from mozilla.org, developer build (${_lang})"
url='http://www.mozilla.org/projects/firefox'
pkgver=54.0a2.20170307
_version=54.0a2
pkgrel=1
arch=('i686' 'x86_64')
conflicts=('firefox-developer')
license=('MPL' 'GPL' 'LGPL')
_file="${_name}-${_version}.en-US.linux"
_file_l10n="${_name}-${_version}.${_lang}.linux"
_srcurl="https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-aurora"
_srcurl_l10n="${_srcurl}-l10n"
source=(
  'firefox-developer.desktop' 'vendor.js'
  "${_srcurl_l10n}/${_file_l10n}-${CARCH}.tar.bz2" "${_srcurl}/${_file}-${CARCH}.txt")
sha512sums=(
  '018c9995046572ed85bd8b6b569ed5dfd3fdfeec3ca25d013879ce1fd6faac13362d2c1554af3351e9ed672e316f7e6c4130760b48c973e65ef37abaf44f7864'
  'bae5a952d9b92e7a0ccc82f2caac3578e0368ea6676f0a4bc69d3ce276ef4f70802888f882dda53f9eb8e52911fb31e09ef497188bcd630762e1c0f5293cc010'
  'SKIP'
  'SKIP')
validpgpkeys=('14F26682D0916CDD81E37B6D61B7B526D98F0353')
depends=('alsa-lib' 'libxt' 'libnotify' 'mime-types' 'nss' 'gtk2' 'gtk3' 'sqlite' 'dbus-glib')

pkgver() {
  echo "${_version}.$(head -n1 "${srcdir}/${_file}-${CARCH}.txt" | cut -c-8)"
}

package() {
  #  uncomment this line to remove these
  #  rm -rf firefox/{extensions,plugins,searchplugins}
  install -d "${pkgdir}"/{usr/{bin,share/{applications,pixmaps}},opt}
  cp -r firefox "${pkgdir}/opt/firefox-${_version}"

  ln -s /opt/firefox-${_version}/firefox "${pkgdir}/usr/bin/firefox-developer"
  install -m644 "${srcdir}"/firefox-developer.desktop "${pkgdir}/usr/share/applications/"
  install -m644 "${srcdir}/firefox/browser/icons/mozicon128.png" "${pkgdir}/usr/share/pixmaps/${pkgname}-icon.png"
  install -Dm644 "${srcdir}/vendor.js" "${pkgdir}/opt/firefox-${_version}/browser/defaults/preferences/vendor.js"
}

# vim:set ts=2 sw=2 cc=80 et:
