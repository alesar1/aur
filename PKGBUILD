# Maintainer: Det
# Contributors: Ner0, alexwizard, thotypous, jdhore, xduugu, randypenguin, bdheeman, AlK

pkgname=chromium-continuous-bin
pkgver=48.0.2535.0.r353722
pkgrel=3
pkgdesc="The open-source project behind Google Chrome (Continuous, auto-tested Snapshot builds)"
arch=('i686' 'x86_64')
url="https://build.chromium.org"
license=('BSD')
depends=('gtk2' 'nss' 'alsa-lib' 'xdg-utils' 'bzip2' 'libevent' 'libxss' 'icu'
         'libexif' 'libgcrypt' 'ttf-font' 'systemd' 'dbus' 'flac' 'snappy'
         'speech-dispatcher' 'pciutils' 'libpulse' 'harfbuzz' 'libsecret'
         'perl' 'perl-file-basedir' 'desktop-file-utils' 'hicolor-icon-theme'
         'gconf')
optdepends=('kdebase-kdialog: needed for file dialogs in KDE'
            'gnome-keyring: for storing passwords in GNOME keyring'
            'kdeutils-kwalletmanager: for storing passwords in KWallet'
            'chromium-pepper-flash-dev: for Pepper Flash plugin [AUR]'
            'google-chrome-dev: for Pepper Flash plugin [AUR]')
provides=('chromium')
install=$pkgname.install
source=("$pkgname"
        "$pkgname.desktop"
        "$pkgname"_{16,22,24,32,48,64,128,256}.png
        'LICENSE')
md5sums=('739c9f17f8c470c5b2a605b05b12da4f'
         '3653b570fc38ce1f3a8c276c024c7c12'
         '6cd41f6e08eee03c6553603fb0b6ecd7'
         '227eac16d1e737bed42742840b950d41'
         '308eb2e0c509e12ecf33165ced9eef0d'
         'e9944fe09afc8495a2fbf70db810a219'
         '17856a060d1fc003447cb7a3f414be7d'
         'f2325d8de3d217471f029e8b59a712e3'
         '811f5de21b882cdb49618de549e017ca'
         'c6cf982d5ebece0b9cd64f065acd384a'
         'db90dcb101891a7285d25f2fbceca752')

[[ $CARCH = x86_64 ]] && _64="_x64"
_build=$(curl -s "http://commondatastorage.googleapis.com/chromium-browser-continuous/Linux$_64/LAST_CHANGE")
source_i686=("chrome-linux-r$_build.zip::http://commondatastorage.googleapis.com/chromium-browser-continuous/Linux/$_build/chrome-linux.zip")
source_x86_64=("chrome-linux-r$_build.zip::http://commondatastorage.googleapis.com/chromium-browser-continuous/Linux_x64/$_build/chrome-linux.zip")
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
  install -d "$pkgdir"/usr/share/licenses/${pkgname/-bin}/
  install -d "$pkgdir"/usr/share/man/man1/

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
  install -m755 $pkgname "$pkgdir"/usr/bin/

  # Rename chrome-sandbox
  mv chrome-linux/chrome{_,-}sandbox

  # Desktop
  install -m644 $pkgname.desktop "$pkgdir"/usr/share/applications/

  # Icons
  rm chrome-linux/product_logo_48.png
  for i in 16 22 24 32 48 64 128 256; do
    install -Dm644 ${pkgname}_${i}.png "$pkgdir"/usr/share/icons/hicolor/${i}x${i}/apps/${pkgname}.png
  done

  # Man page
  gzip -9 chrome-linux/chrome.1
  mv chrome-linux/chrome.1.gz "$pkgdir"/usr/share/man/man1/$pkgname.1.gz

  # License
  install -m644 LICENSE "$pkgdir"/usr/share/licenses/${pkgname/-bin}/

  msg2 "Installing main directory..."
  mv chrome-linux/ "$pkgdir"/opt/${pkgname/-bin}
}
