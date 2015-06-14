# Maintainer: Det
# Contributors: Ner0, alexwizard, thotypous, jdhore, xduugu, randypenguin, bdheeman, AlK

pkgname=chromium-snapshot-bin
pkgver=45.0.2432.0.r334343
pkgrel=1
pkgdesc="The open-source project behind Google Chrome (Snapshot builds)"
arch=('i686' 'x86_64')
url="https://build.chromium.org"
license=('BSD')
depends=('gtk2' 'nss' 'alsa-lib' 'xdg-utils' 'bzip2' 'libevent' 'libxss' 'icu'
         'libexif' 'libgcrypt' 'ttf-font' 'systemd' 'dbus' 'flac' 'snappy'
         'speech-dispatcher' 'pciutils' 'libpulse' 'harfbuzz' 'libsecret'
         'perl' 'perl-file-basedir' 'desktop-file-utils' 'hicolor-icon-theme')
optdepends=('kdebase-kdialog: needed for file dialogs in KDE'
            'gnome-keyring: for storing passwords in GNOME keyring'
            'kdeutils-kwalletmanager: for storing passwords in KWallet'
            'chromium-pepper-flash-dev: for Pepper Flash plugin [AUR]'
            'google-chrome-dev: for Pepper Flash plugin [AUR]')
provides=('chromium')
install=$pkgname.install
source=('chromium-snapshot-bin'
        'chromium-snapshot-bin.desktop'
        'LICENSE')
md5sums=('1ac561e11601b7229942bede39fcfb54'
         '793b3dca6ae19d15a830e7de7e1f6fd3'
         '537e0b52077bf0a616d0a0c8a79bc9d5')

[[ $CARCH = x86_64 ]] && _64="_x64"
_build=$(curl -s "http://commondatastorage.googleapis.com/chromium-browser-snapshots/Linux$_64/LAST_CHANGE")
source_i686=("chrome-linux-r$_build.zip::http://commondatastorage.googleapis.com/chromium-browser-snapshots/Linux/$_build/chrome-linux.zip")
source_x86_64=("chrome-linux-r$_build.zip::http://commondatastorage.googleapis.com/chromium-browser-snapshots/Linux_x64/$_build/chrome-linux.zip")
md5sums_i686=('SKIP')
md5sums_x86_64=('SKIP')

pkgver() {
  echo $(chrome-linux/chrome --version | cut -d " " -f2).r$_build
}

package() {
  msg2 "Creating directory structure..."
  install -d "$pkgdir"/opt/
  install -d "$pkgdir"/usr/bin/
  install -d "$pkgdir"/usr/share/applications/
  install -d "$pkgdir"/usr/share/licenses/chromium-snapshot/
  install -d "$pkgdir"/usr/share/man/man1/
  install -d "$pkgdir"/usr/share/pixmaps/

  msg2 "Making it nice..."
  # Permissions
  find -type d -exec chmod 755 {} ';'
  find -type f -exec chmod +r {} ';'
  cd chrome-linux
  chmod 755 chrome chrome-wrapper nacl_* xdg-*
  chmod 4755 chrome_sandbox
  cd ..

  msg2 "Moving contents..."
  # Main script
  install -m755 chromium-snapshot-bin "$pkgdir"/usr/bin/

  # Rename chrome-sandbox
  mv chrome-linux/chrome{_,-}sandbox

  # Desktop
  install -m644 chromium-snapshot-bin.desktop "$pkgdir"/usr/share/applications/

  # Icon
  mv chrome-linux/product_logo_48.png "$pkgdir"/usr/share/pixmaps/chromium-snapshot-bin.png

  # Man page
  gzip -9 chrome-linux/chrome.1
  mv chrome-linux/chrome.1.gz "$pkgdir"/usr/share/man/man1/chromium-snapshot-bin.1.gz

  # License
  install -m644 LICENSE "$pkgdir"/usr/share/licenses/chromium-snapshot/

  msg2 "Installing main directory..."
  mv chrome-linux/ "$pkgdir"/opt/chromium-snapshot
}
