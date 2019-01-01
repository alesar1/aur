# Maintainer: Matthias Lisin <ml@visu.li>
# Contributor: sum01 <sum01@protonmail.com>
pkgname=rocketchat-desktop
pkgver=2.14.6
_srcname="Rocket.Chat.Electron-$pkgver"
pkgrel=4
pkgdesc='Rocket.Chat Native Cross-Platform Desktop Application via Electron.'
arch=('i686' 'x86_64')
url="https://github.com/RocketChat/Rocket.Chat.Electron"
license=('MIT')
depends=('electron2')
makedepends=('nodejs' 'node-gyp' 'python2' 'yarn')
optdepends=('hunspell-en_US: spell checking')
conflicts=('rocketchat-client-bin')
source=("$pkgname-$pkgver.tar.gz::https://github.com/RocketChat/Rocket.Chat.Electron/archive/$pkgver.tar.gz"
        rocketchat-desktop
        fix-linux-target.patch
        fix-gulp-release.patch
        fix-dictionaries.patch
        rocketchat-desktop.desktop)
sha512sums=('58b427e9745fa8b3866d1ea9c144c700faed7838c0fba6f070592dfdaea7e6509e6e53f5983494431a7976db919b65ad798b7b5cacac998e049239bb41ede0b8'
            '2b39f5728c7d7aff2f59a568c1e3c63816c72d1055743e7bb233aafe6370524e835d58995097480deaed864ac22aea54b5c450689eb18bee0bed0bc733810792'
            '31e0b1d7d9a5fefa4ad4d186df2b3eb8849d7dee9dd3fa14fff6741006ef31191575a23ba62a86f53cf9fc692d138db6a380e2ad860077bc3d854c5a9083b716'
            '796a2a56a1facc2519d65955bb39d78733c13b5993c4b03cd2af11b83aa9c6132c0fbf9e7160146c6c87bc91cb04c4e66932fe891449d031c787284b5ce9d72a'
            'ed0bc8884ea3c7ca50ae8f6aef415aecfac89f958939c1ccb6c86480a7210ead0df2fe0548e465fc1dd559436bae9db779d408e8a754e986cc8a976cd6590878'
            'd87664b9bdf30eac3011393d094962e0d568a94b5eaf4c8e5f17529442dcba905cea7341527066102a97a07a981acd6ce045b8737eb78a7d81a2a2d05023fe26')
if [[ $CARCH == "i686" ]]; then
    _releasename="release:linux-ia32"
    _distname="linux-ia32-unpacked"
else
    _releasename="release:linux-x64"
    _distname="linux-unpacked"
fi

prepare() {
    for patch in *.patch; do
        patch -p1 -d "$_srcname" < "$patch"
    done
}

build() {
    cd "$_srcname"
    yarn install --non-interactive --pure-lockfile --cache-folder "$srcdir/yarn-cache"
    yarn build --env=production "$_releasename"
}

package() {
    install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
    install -Dm755 "$pkgname" "$pkgdir/usr/bin/$pkgname"

    cd "$srcdir/$_srcname"
    install -Dm644 "build/icons/512x512.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/$pkgname.png"
    install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm644 "dist/$_distname/resources/app.asar" "$pkgdir/usr/lib/$pkgname.asar"
}
