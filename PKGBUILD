# Maintainer: Matthias Lisin <ml@visu.li>
# Contributor: sum01 <sum01@protonmail.com>
pkgname=rocketchat-desktop
pkgver=2.14.0
_srcname="Rocket.Chat.Electron-$pkgver"
pkgrel=2
pkgdesc='Rocket.Chat Native Cross-Platform Desktop Application via Electron.'
arch=('i686' 'x86_64')
url="https://github.com/RocketChat/Rocket.Chat.Electron"
license=('MIT')
depends=('nss' 'libxss' 'gconf' 'gtk3' 'glibc')
makedepends=('nodejs' 'node-gyp' 'python2' 'yarn')
conflicts=('rocketchat-client-bin')
source=("$pkgname-$pkgver.tar.gz::https://github.com/RocketChat/Rocket.Chat.Electron/archive/$pkgver.tar.gz"
        fix-linux-target.patch
        fix-gulp-release.patch
        fix-node-11-build.patch
        rocketchat-desktop.desktop)
sha512sums=('3b90120d7fed1af17d244d4e546170beabbc59602ef1733860f8123d4460d23dcf719ec686f022597a6928489bea804f70b2ed665f55447ecb4f3b792cea4dec'
            '31e0b1d7d9a5fefa4ad4d186df2b3eb8849d7dee9dd3fa14fff6741006ef31191575a23ba62a86f53cf9fc692d138db6a380e2ad860077bc3d854c5a9083b716'
            '796a2a56a1facc2519d65955bb39d78733c13b5993c4b03cd2af11b83aa9c6132c0fbf9e7160146c6c87bc91cb04c4e66932fe891449d031c787284b5ce9d72a'
            'e6a4523e0d983dfe01100cf84879ee358642e9158ee247d405f3010fcd91db62cec1667927891703d67b50bfdecfe476f9f42bb3018b6e7da2f469d0b0339555'
            'd87664b9bdf30eac3011393d094962e0d568a94b5eaf4c8e5f17529442dcba905cea7341527066102a97a07a981acd6ce045b8737eb78a7d81a2a2d05023fe26')
if [[ $CARCH == "i686" ]]; then
    _releasename="release:linux-ia32"
    _distname="linux-ia32-unpacked"
else
    _releasename="release:linux-x64"
    _distname="linux-unpacked"
fi

prepare() {
    patch -p1 -d "$_srcname" < fix-linux-target.patch
    patch -p1 -d "$_srcname" < fix-gulp-release.patch
    patch -p1 -d "$_srcname" < fix-node-11-build.patch
}

build() {
    cd "$srcdir/$_srcname"
    yarn install --non-interactive --pure-lockfile --cache-folder "$srcdir/yarn-cache"
    yarn build --env=production "$_releasename"
}

package() {
    install -d "$pkgdir"/{usr/bin,opt}
    install -Dm644 "$srcdir/$_srcname/build/icons/512x512.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/$pkgname.png"
    install -Dm644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
    install -Dm644 "$srcdir/$_srcname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    cp -r "$srcdir/$_srcname/dist/$_distname" "$pkgdir/opt/$pkgname"
    ln -sf "/opt/$pkgname/$pkgname" "$pkgdir/usr/bin/$pkgname"
}
