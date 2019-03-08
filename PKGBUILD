# Maintainer: Nbiba bedis <bedisnbiba@gmail.com>

pkgname=fedora-firefox-wayland-bin
pkgver=65.0.2
pkgrel=1
epoch=1
# fedora version
fc="fc29"
pkgdesc="Fedora's firefox build wtih wayland enabled by default"
arch=(x86_64)
license=(MPL GPL LGPL)
url="https://www.mozilla.org/firefox/"
provides=('firefox' 'libvpx=1.7')
conflicts=('firefox' 'libvpx=1.7')
options=(!emptydirs !strip)
makedepends=(sed)
depends=(gtk3 mozilla-common libxt startup-notification mime-types dbus-glib
         ffmpeg nss hunspell-en_US sqlite ttf-font libpulse libvpx icu libjpeg6-turbo pipewire)
optdepends=('networkmanager: Location detection via available WiFi networks'
            'libnotify: Notification integration'
            'pulseaudio: Audio support'
            'speech-dispatcher: Text-to-Speech')

source=("https://kojipkgs.fedoraproject.org//packages/firefox/$pkgver/$pkgrel.$fc/x86_64/firefox-$pkgver-$pkgrel.$fc.x86_64.rpm"
		"http://download-ib01.fedoraproject.org/pub/fedora/linux/releases/29/Everything/x86_64/os/Packages/l/libvpx-1.7.0-7.fc29.x86_64.rpm")

md5sums=('7ff9c41e8ed22a027bc056429ce6000e'
         '25c72e7f95169902a92472ebbe75fc55')


prepare() {
  # remove a bit of fedora's custom sutff 
  rm -f usr/lib64/firefox/browser/defaults/preferences/firefox-redhat-default-prefs.js
  # Enable wayland by default
  sed -i '72d;73d;75d;76d;' usr/bin/firefox
  
}

package() {
  # Avoid conflicts
  rm -rf usr/lib
  rm -rf usr/share/licenses/
  rm -rf usr/share/doc/
  
  mv usr/lib64 usr/lib
  cp  -r  usr/ $pkgdir/
}

