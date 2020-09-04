# Maintainer: Taiko2k <captain dot gxj at gmail dot com>

pkgname=tauon-music-box
_pkgname=tauonmb
_gitname=TauonMusicBox
pkgver=6.2.6
pkgrel=1
pkgdesc="A modern streamlined music player"
arch=('any')
url="https://tauonmusicbox.rocks"
license=('GPL3')

depends=('python-pillow'
         'python-pylast'
         'python-hsaudiotag3k'
         'python-pysdl2' # AUR
         'python-stagger' # AUR
         'python-send2trash'
         'python-pylyrics' # AUR
         'python-musicbrainzngs'
         'python-isounidecode' # AUR
         'python-setproctitle'
         'python-gobject'
         'python-cairo'
         'python-beautifulsoup4'
         'python-requests'
         'python-dbus'
         'alsa-plugins'
         'ffmpeg'
         'flac'
         'gst-plugins-bad'
         'gst-plugins-ugly'
         'noto-fonts-extra'
         'noto-fonts-cjk'
         'sdl2_image'
         'xdg-utils')
         
optdepends=('p7zip: 7z archive extraction support'
            'unrar: RAR archive extraction support'
            'python-plexapi: Plex streaming'
            'python-pypresence: Discord status support'
            'python-tekore: Spotify playback control'
            'picard: Tag editing')
            
source=("$pkgname-$pkgver.tar.gz::https://github.com/Taiko2k/TauonMusicBox/archive/v$pkgver.tar.gz")
sha256sums=('2447624933e7e03c9bea22dcd4f3ffd48a716f3fc5fec4b7e8a4422ec8f9bc6b')

build() {
    cd "$_gitname-$pkgver"
    python compile-translations.py
}

package() {
    cd "$_gitname-$pkgver"
    install -Dm755 tauon.py -t "$pkgdir/opt/$pkgname"
    install -d "$pkgdir/usr/bin"
    ln -s "/opt/$pkgname/tauon.py" "$pkgdir/usr/bin/$_pkgname"
 
    install -Dm644 input.txt -t "$pkgdir/opt/$pkgname"
    cp -r  assets templates theme t_modules "$pkgdir/opt/$pkgname"
 
    for t in de fr_FR ja_JP nb_NO pt_BR pt_PT sv zh_CN; do
        install -Dm644 locale/${t}/LC_MESSAGES/*.mo -t "$pkgdir/usr/share/locale/${t}/LC_MESSAGES"
    done
 
    install -Dm644 "extra/$_pkgname.desktop" -t "$pkgdir/usr/share/applications"
    install -Dm644 "extra/$_pkgname-symbolic.svg" -t "$pkgdir/usr/share/icons/hicolor/symbolic/apps"
    install -Dm644 "extra/$_pkgname.svg" -t "$pkgdir/usr/share/icons/hicolor/scalable/apps"
    install -Dm755 "extra/tauonmb.sh" "$pkgdir/opt/$pkgname/tauonmb.sh"
    install -Dm755 "extra/tauonmb.sh" "$pkgdir/usr/bin/tauon"
}

