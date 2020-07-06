# Maintainer: Sefa Eyeoglu <contact@scrumplex.net>
# Contributor: Thaodan <theodorstormgrade@gmail.com>
# Contributor: Weng Xuetian <wengxt@gmail.com>
# Contributor: Marc Mettke <marc@itmettke.de>

pkgname=firefox-kde-opensuse-rpm
_ffver=78.0.1
_revision=842.1
pkgver=${_ffver}_0_${_revision}
pkgrel=1
epoch=2  # Because of update 76.0.1-833.1
pkgdesc="Standalone web browser from mozilla.org with OpenSUSE patch, integrate better with KDE - Binary from OBS"
arch=(x86_64 i686)
license=("MPL" "GPL" "LGPL")
url="https://build.opensuse.org/package/show/mozilla:Factory/MozillaFirefox"
depends=("mozilla-common" "startup-notification" "mime-types"
         "dbus-glib"
         "libvpx"  "libevent" "hunspell"
         "libnotify" "kmozillahelper" "ffmpeg" "gtk3" "gtk2"
         # system av1
         "dav1d" "aom"
         # system webp
         "libwebp"
         # system libevent
         "libevent"
        )
optdepends=("networkmanager: Location detection via available WiFi networks"
            "speech-dispatcher: Text-to-Speech")
makedepends=("gzip")
provides=("firefox=${pkgver}")
conflicts=("firefox" "firefox-kde-opensuse")
source_x86_64=("https://download.opensuse.org/repositories/mozilla:/Factory/openSUSE_Factory/x86_64/MozillaFirefox-${_ffver}-${_revision}.x86_64.rpm")
source_i686=("https://download.opensuse.org/repositories/mozilla:/Factory/openSUSE_Factory/i686/MozillaFirefox-${_ffver}-${_revision}.i686.rpm")
sha512sums_x86_64=('445f8b194eedc42ff907a88a91b98ca0c204834f3172496ea402a7363ea45fc6e0e2055a67df3a27fbcb4ef06f1a9d91f5bab2a5030e7ae304bd6e9c4b0ebbf7')
sha512sums_i686=('cab7df2f07e2441c981977a1fcfd6b744ece6637dbe3f0cb90fa6c6c53f60a301837c5f9e0f0de58d8bbfe9e49055a1eedc48c992037291d13d7c9fa14ef0f74')


prepare() {
    cd "usr"

    # Cleanup openSUSE Branding
    # We keep the "mozilla" directories as there might be other things in there in the future.
    rm -rf "share/mozilla/extensions"
    rm -rf "lib64/mozilla/extensions"

    # unzip man pages, let makepkg handle them
    gunzip -f "share/man/man1/firefox.1.gz"

    sed -i "s|/usr/lib64/firefox|/usr/lib/firefox|g" "lib64/firefox/firefox.sh"
    sed -i "s|/usr/lib64/firefox|/usr/lib/firefox|g" "share/man/man1/firefox.1"
}

package() {
    cd "usr"

    install -d "${pkgdir}/usr"

    cp -r "." "${pkgdir}/usr/"
    mv "${pkgdir}/usr/lib64" "${pkgdir}/usr/lib"  # Make file structure more in-line with Arch
    ln -sf "/usr/lib/firefox/firefox.sh" "${pkgdir}/usr/bin/firefox"
}
