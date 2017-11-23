# Maintainer @fhdk <echo "ZmhAdWV4LmRrCg==" | base64 -d>
# Based on PKGBUILD:
# * `firefox-developer`
# * `firefox-developer-es-mx`
# * `firefox-developer-de`
# Vigtigt: Det er nødvendigt at importere PGP nøgle for "Mozilla Sofware Releases <release@mozilla.com>"
#   $ gpg --keyserver pgp.mit.edu --recv-keys 14F26682D0916CDD81E37B6D61B7B526D98F0353

_name=firefox
_channel=developer
_lang=da

pkgname="${_name}-${_channel}-${_lang}"
pkgdesc="Standalone web browser from mozilla.org, developer build - Danish"
url="http://www.mozilla.org/firefox/developer"
pkgver=58.0b5
pkgrel=1
arch=('x86_64')
license=("MPL" "GPL" "LGPL")
_file="${_name}-${pkgver}"
_url="https://download-installer.cdn.mozilla.net/pub/devedition/releases/${pkgver}"
_loc="linux-${arch}/${_lang}"
source=("${_url}/${_loc}/${_file}.tar.bz2"
        "${_url}/SHA512SUMS"
        "${_url}/SHA512SUMS.asc"
        "${_name}-${_channel}.desktop"
        "vendor.js")
sha512sums=('f8d40ec5776e2dea3ff3d7f8d1798108d4f26c5e1ee9adece101d04f1f147cba33501ca4e42f51f89b3def1064a2f88da5471c0af07cf6b5924afde23953bb4d'
            '2168d48236d4e0144f517783551e6ea52f1a0ca29f4a4d816fdbd075427e85c40b4016e9d93b24370298022ae03282149e4bda46a964bb96f593c398fbfc3d5f'
            'SKIP'
            'b109b884ed79e9e214541750a0fcac8d7d8891cc7f0e0d472b717a5b71e569ab5852534bceaab045a5b13a9290a7905604d08fe97e28c675a2266c30fe719cb6'
            'bae5a952d9b92e7a0ccc82f2caac3578e0368ea6676f0a4bc69d3ce276ef4f70802888f882dda53f9eb8e52911fb31e09ef497188bcd630762e1c0f5293cc010')
validpgpkeys=('14F26682D0916CDD81E37B6D61B7B526D98F0353') # Mozilla’s GnuPG release key
# Dependencies
# https://www.archlinux.org/packages/extra/x86_64/firefox/
depends=('dbus-glib' 'gtk3' 'libxt' 'mime-types' 'nss' 'sqlite')
optdepends=(
        'alsa-lib: An alternative implementation of Linux sound support'
        'ffmpeg: Complete solution to record, convert and stream audio and video'
        'gtk2: flash plugin support'
        'gtk3-print-backends: Print support'
        'hunspell: Spell checking'
        'hyphen: Hyphenation'
        'libnotify: Notification integration'
        'networkmanager: Location detection via available WiFi networks'
        'pulseaudio: Audio/video playback'
        'speech-dispatcher: Text to Speech'
        'startup-notification: Support for FreeDesktop Startup Notification'
)

prepare() {
    msg2 ""
    msg2 "Husk PGP nøgle for 'Mozilla Sofware Releases' <release@mozilla.com>"
    msg2 "\$ gpg --keyserver pgp.mit.edu --recv-keys D98F0353"

    # Check if hash of the source archive matches the one provided by Mozilla (which was signed with GPG).
    _checksum=`grep "linux-x86_64/$_lang/firefox-$pkgver.tar.bz2" $srcdir/SHA512SUMS | cut -f1 -d " "`
    _actual=`sha512sum $srcdir/firefox-$pkgver.tar.bz2 | cut -f1 -d " "`

    msg2 "Checking integrity of firefox-$pkgver.tar.bz2"

    if [[ $_checksum == $_actual ]];
    then
        msg2 "Integrity verified successfully."
    else
        msg2 "Integrity verification failed!"
        exit 1
    fi
}

package() {
    opt_path="opt/${pkgname}"
    # install binaries
    install -d $pkgdir/{usr/{bin,share/{applications,pixmaps}},opt}
    cp -r firefox $pkgdir/${opt_path}
    # symlink binary
    ln -s /${opt_path}/firefox $pkgdir/usr/bin/$_name-$_channel
    # install icon
    install -m644 $srcdir/firefox/browser/icons/mozicon128.png $pkgdir/usr/share/pixmaps/$_name-${_channel}-icon.png
    # install desktop file
    install -m644 $srcdir/$_name-$_channel.desktop $pkgdir/usr/share/applications/
    # install vendor.js file
    install -Dm644 $srcdir/vendor.js $pkgdir/opt/$_name-$_channel/browser/defaults/preferences/vendor.js
}
