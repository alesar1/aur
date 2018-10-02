# Maintainer: Javier Tiá <javier dot tia at gmail dot com>
# Creator: Javier Vasquez <j dot e dot vasquez dot v at gmail dot com>

_name=exchangecalendar
pkgname=thunderbird-${_name}
pkgver=4.0.0
pkgrel=1
pkgdesc='Thunderbird Addon/Extension and Provider for Microsoft Exchange 2007/2010/2013 Calendar, Tasks, Contacts and Global Address List (GAL)'
url='https://github.com/ExchangeCalendar/exchangecalendar'
arch=('any')
groups=('office')
license=('GPL3')
depends=('thunderbird>=52')
makedepends=('zip')
options=('!strip' '!libtool' '!staticlibs' '!docs')
conflicts=('thunderbird-exchangecalendar-git' 'thunderbird-exchangecalendar-beta')
replaces=('thunderbird-exchangecalendar-git' 'thunderbird-exchangecalendar-beta')
provides=("${_name}=${pkgver}")
# https://github.com/ExchangeCalendar/exchangecalendar/releases/download/v4.0.0/exchangecalendar-v4.0.0.xpi
source=("${pkgname}-${pkgver}.xpi::${url}/releases/download/v${pkgver}/${_name}-v${pkgver}.xpi")
sha256sums=('e51117aa60b2ea4430ae85271e83d185c5a7ee93d6b87f78d0b6ead494318c8b')

package() {
  _extdir=usr/lib/thunderbird/extensions
  mkdir -p ${pkgdir}/${_extdir}/${pkgname}
  cd ${pkgdir}/${_extdir}/${pkgname}
  bsdtar -x -f ${srcdir}/${pkgname}-${pkgver}.xpi

  # Extract extension name
  _emid=$(grep -m 1 em:id install.rdf | sed 's/.*>\(.*\)<.*/\1/')

  # Change extension name
  cd ..
  mv ${pkgname} ${_emid}
  cd ${_emid}

  # Disable warn and check about new version
  sed -i 's|\(warnAboutNewAddOnVersion", \)true|\1false|' \
    defaults/preferences/update_disable.txt
  sed -i 's|\(checkForNewAddOnVersion", \)true|\1false|' \
    defaults/preferences/update_disable.txt
  cat defaults/preferences/update_disable.txt > defaults/preferences/update.js

  # Fix permissions in emid extension directory
  find . -type d -exec chmod 0755 \{\} \+
  find . -type f -exec chmod 0644 \{\} \+
  chown -R root:root .
}

# vim:set ts=2 sw=2 et:
