# Maintainer: Almir Dzinovic <almir@dzinovic.net>
# Contributor: Alexander Pavel <alexpavel123@gmail.com>

pkgname=mattermost-desktop-bin
_pkgname=mattermost-desktop
pkgver=5.0.4
pkgrel=1
pkgdesc="Mattermost Desktop for Linux (binary)"
arch=('i686' 'x86_64')

url="https://github.com/mattermost/desktop"
license=('Apache')

makedepends=('npm' 'asar')
depends=('alsa-lib' 'gtk3' 'libnotify' 'nss' 'libxss' 'libxtst' 'xdg-utils' 'libutil-linux' 'libappindicator-gtk3' 'libsecret')
optdepends=()

conflicts=('mattermost-desktop')
provides=("${_pkgname}")

source=(${_pkgname}.desktop)
source_i686=("https://releases.mattermost.com/desktop/${pkgver}/${_pkgname}-${pkgver}-linux-ia32.tar.gz")
source_x86_64=("https://releases.mattermost.com/desktop/${pkgver}/${_pkgname}-${pkgver}-linux-x64.tar.gz")
sha256sums=('9e60ac9cc5a9cbebccb4180e7de947968aa49858812b5623812a1ab651a91093')
sha256sums_i686=('cc3a810a4c740da1b11338f12ac74931fe2e494bbd68f9b4f5d40abf95b9ec84')
sha256sums_x86_64=('cbd2981ce282eecfea1167c500d900cdd31bd041b0861025743b7d58e4cb9229')

package() {
    case "$CARCH" in
        i686)
            cd "${srcdir}/${_pkgname}-${pkgver}-linux-ia32"
            ;;
        x86_64)
            cd "${srcdir}/${_pkgname}-${pkgver}-linux-x64"
            ;;
    esac

    install -d -m 755 "${pkgdir}"/usr/lib/mattermost

    cp -r * "$pkgdir/usr/lib/mattermost"

    cd "$pkgdir/usr/lib/mattermost"
    npx asar extract-file "$pkgdir/usr/lib/mattermost/resources/app.asar" assets/linux/icon.svg

    install -d -m 755 "$pkgdir/usr/bin"
    ln -s /usr/lib/mattermost/${_pkgname} "$pkgdir/usr/bin/$_pkgname"

    install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"

    install -Dm644 "$srcdir/$_pkgname.desktop" "$pkgdir/usr/share/applications/$_pkgname.desktop"
    install -Dm644 "$pkgdir/usr/lib/mattermost/icon.svg" "$pkgdir/usr/share/pixmaps/$_pkgname.svg"
}
