# Maintainer: Sebastian 'gonX' Jensen <gonx@gonx.dk>
# Contributor: LavaDesu <me@lava.moe>
pkgname=opentabletdriver
_pkgname=OpenTabletDriver
_lpkgname=opentabletdriver
_spkgname=otd
pkgver=0.6.0.2
pkgrel=1
pkgdesc="A cross-platform open source tablet driver"
arch=('x86_64')
url="https://github.com/OpenTabletDriver/OpenTabletDriver"
license=('LGPL3')
depends=('dotnet-runtime>=6.0' 'dotnet-host>=6.0' 'gtk3' 'libevdev')
optdepends=('libxrandr: x11 display querying support' 'libx11')
makedepends=('git' 'dotnet-sdk>=6.0')
install="notes.install"
source=("OpenTabletDriver-$pkgver.tar.gz::https://github.com/OpenTabletDriver/OpenTabletDriver/archive/v$pkgver.tar.gz"
        "$_spkgname"
        "$_spkgname-gui"
        "$_lpkgname.service"
        "$_pkgname.desktop"
        "notes.install"
        )

sha256sums=('d148aac9dee2175261669b51cedd046f19efff6fbda5573ca1f0e2a636d2d4d9'
            '8a09d29e683aefcbf54e5fe891d5688f959d9399804f9c151f0e8f6e6a1ede1a'
            '20aac1584a8e08b5a9add1d02ce38e60ddfede615227df6f25c7422217df82b0'
            '88f7d9ae1e9402cfbf9266ddf0de642195b64de13a3d5ce6f93460ba035cf7f2'
            '4399359bf6107b612d10aaa06abb197db540b00a973cfec64c2b40d1fbbb2834'
            'b28aa1d2d4f531d877f6601eb5e684f78cee7acfe2bd7af739e5144fd36bafdf')

_srcdir="OpenTabletDriver-$pkgver"

build() {
    export DOTNET_CLI_TELEMETRY_OPTOUT=1
    export DOTNET_SKIP_FIRST_TIME_EXPERIENCE=true

    cd "$srcdir/$_srcdir"

    if check_option "strip" y; then
        EXTRA_OPTIONS="/p:DebugType=None /p:DebugSymbols=false"
    fi

    ./build.sh linux-x64 \
        $EXTRA_OPTIONS

    ./generate-rules.sh
}

package() {
    cd "$srcdir/$_srcdir"

    install -do root "$pkgdir/usr/share/$_pkgname"

    shopt -s nullglob
    cd bin
    for binary in *.dll *.json *.pdb; do
        install -Dm 755 -o root "$binary" -t "$pkgdir/usr/share/$_pkgname"
    done

    cd "$srcdir"
    sed -i "s/OTD_VERSION/$pkgver/" "$_pkgname.desktop"

    install -Dm 644 -o root "$_srcdir/bin/99-$_lpkgname.rules" -t "$pkgdir/usr/lib/udev/rules.d"
    install -Dm 644 -o root "$_srcdir/$_pkgname.UX/Assets/$_spkgname.png" -t "$pkgdir/usr/share/pixmaps"

    install -Dm 755 -o root "$_spkgname" -t "$pkgdir/usr/bin"
    install -Dm 755 -o root "$_spkgname-gui" -t "$pkgdir/usr/bin"
    install -Dm 644 -o root "$_lpkgname.service" -t "$pkgdir/usr/lib/systemd/user"
    install -Dm 644 -o root "$_pkgname.desktop" -t "$pkgdir/usr/share/applications"
}
