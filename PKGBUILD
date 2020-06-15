# Maintainer: MoeLava <me@lava.moe>
# Maintainer: InfinityGhost <infinityghostgit@gmail.com>
pkgname=opentabletdriver-git
_pkgname=OpenTabletDriver
_lpkgname=opentabletdriver
pkgver=v0.2.0.rc1.r52.g385c965
pkgrel=2
pkgdesc="A cross-platform open source tablet driver"
arch=('x86_64')
url="https://github.com/InfinityGhost/OpenTabletDriver"
license=('GPL')
depends=('dotnet-runtime>=3.0' 'dotnet-host>=3.0' 'fontconfig' 'libevdev' 'libxrandr' 'libx11')
makedepends=('git' 'dotnet-sdk>=3.0')
provides=("opentabletdriver")
conflicts=("opentabletdriver")
install="$_lpkgname.install"
source=('git+https://github.com/InfinityGhost/OpenTabletDriver'
        'git+https://github.com/InfinityGhost/OpenTabletDriver-udev'
        "$_lpkgname"
        "$_lpkgname.install"
        "$_pkgname.desktop")

sha256sums=('SKIP'
            'SKIP'
            '7e95c880ca6328d3bb6f3675ee063b18330d3ea753bef9b5376cafc31eff47f2'
            '304ec78284e99395b3091923da540af3a1826205663aa8fd2d52deb64f852166'
            '96f95b08be8594787a741f783a553a342abd4961ff0ef8dcc248c22e865ec3dc')

pkgver() {
    cd "$srcdir/$_pkgname"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    export DOTNET_CLI_TELEMETRY_OPTOUT=1
    export DOTNET_SKIP_FIRST_TIME_EXPERIENCE=true

    cd "$srcdir/$_pkgname"
    dotnet publish        OpenTabletDriver        \
        --configuration   Release                 \
        --runtime         linux-x64               \
        --self-contained  false                   \
        --output          "./$_pkgname/out"       \
        /p:PublishTrimmed=false

    cd "$srcdir/$_pkgname-udev"
    dotnet build          OpenTabletDriver.udev   \
        --configuration   Release                 \
        --runtime         linux-x64               \
        --output          "./$_pkgname.udev/out"

    dotnet "./$_pkgname.udev/out/$_pkgname.udev.dll"       \
        "$srcdir/$_pkgname/TabletDriverLib/Configurations" \
        "30-$_lpkgname.rules" > /dev/null
}

package() {
    cd "$srcdir"

    install -do root "$pkgdir/usr/share/$_pkgname"

    cd "$srcdir/$_pkgname/$_pkgname/out"
    for binary in *.so *.dll *.json *.pdb; do
        install -Dm 755 -o root "$binary" -t "$pkgdir/usr/share/$_pkgname"
    done
    cd "$srcdir"

    sed -i "s/OTD_VERSION/$pkgver/" "$_pkgname.desktop"

    install -Dm 644 -o root "$srcdir/$_pkgname/LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname"
    install -Dm 644 -o root "$_pkgname.desktop" -t "$pkgdir/usr/share/applications"
    install -Dm 644 -o root "$srcdir/$_pkgname-udev/30-$_lpkgname.rules" -t "$pkgdir/usr/lib/udev/rules.d"
    install -Dm 644 -o root "$srcdir/$_pkgname/$_pkgname/Assets/otd.png" -t "$pkgdir/usr/share/pixmaps"
    cp -r "$srcdir/$_pkgname/TabletDriverLib/Configurations" "$pkgdir/usr/share/$_pkgname/"

    install -Dm 755 -o root "$_lpkgname" -t "$pkgdir/usr/bin"
}
