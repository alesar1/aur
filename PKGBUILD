# Maintainer: Sibren Vasse <arch@sibrenvasse.nl>
# Contributor: Ilya Gulya <ilyagulya@gmail.com>
pkgname="deezer"
pkgver=4.19.0
pkgrel=3
pkgdesc="A proprietary music streaming service"
arch=('any')
url="https://www.deezer.com/"
license=('custom:"Copyright (c) 2006-2018 Deezer S.A."')
depends=('electron6')
provides=('deezer')
makedepends=('p7zip' 'asar' 'prettier' 'imagemagick' 'npm')
source=("$pkgname-$pkgver-setup.exe::https://www.deezer.com/desktop/download/artifact/win32/x86/$pkgver"
        "$pkgname.desktop"
        deezer
        menu-bar.patch
        quit.patch
        0001-MPRIS-interface.patch)
sha256sums=('676c85bb77f7c28962a4ac59baf4ed4e564475c559fc1df44ce678826075e756'
            'f8a5279239b56082a5c85487b0c261fb332623f27dac3ec8093458b8c55d8d99'
            '441ab8532eac991eb5315a8ab39242aae1aa6fd633e8af4b0ab2a247fe1239cc'
            '8a22f666e308663cb6addabe7695b1e5e3bfa07f68cc7b479e51426dee1c36b0'
            '75c7edd8714393579e29842a8e15aabccfd0a9b5130ff7501890e7c1c1931b46'
            '217d899797908004453e9c0d86057b5682b3612c6412b4f6c107ac4ad201320b')

prepare() {
    # Extract app from installer
    7z x -so $pkgname-$pkgver-setup.exe "\$PLUGINSDIR/app-32.7z" > app-32.7z
    # Extract app archive
    7z x -y -bsp0 -bso0 app-32.7z

    # Extract png from ico container
    convert resources/win/app.ico resources/win/deezer.png

    cd resources/
    rm -r app "$srcdir/npm_temp" || true
    asar extract app.asar app

    mkdir -p app/resources/linux/
    cp win/systray.png app/resources/linux/systray.png

    # Remove NodeRT from package (-205.72 MiB)
    rm -r app/node_modules/@nodert

    # Install extra node modules for mpris-service
    mkdir "$srcdir/npm_temp"; cd "$srcdir/npm_temp"
    npm install  --prefix ./ mpris-service

    for d in node_modules/*; do
        if [ ! -d "$srcdir/resources/app/node_modules/$(basename $d)" ]
        then
            mv "$d" "$srcdir/resources/app/node_modules/"
        fi
    done

    cd "$srcdir/resources/app"

    prettier --write "build/*.js"
    prettier --write "build/assets/cache/js/route-naboo*ads*.js"
    # Disable menu bar
    patch -p1 < "$srcdir/menu-bar.patch"
    # Hide to tray (https://github.com/SibrenVasse/deezer/issues/4)
    patch -p1 < "$srcdir/quit.patch"

    # Monkeypatch MPRIS D-Bus interface
    patch -p1 < "$srcdir/0001-MPRIS-interface.patch"

    cd ..
    asar pack app app.asar
}

package() {
    mkdir -p "$pkgdir"/usr/share/deezer
    mkdir -p "$pkgdir"/usr/share/applications
    mkdir -p "$pkgdir"/usr/bin/
    for size in 16 32 48 64 128 256 512; do
        mkdir -p "$pkgdir"/usr/share/icons/hicolor/${size}x${size}/apps/
    done

    install -Dm644 resources/app.asar "$pkgdir"/usr/share/deezer/
    install -Dm644 resources/win/deezer-0.png "$pkgdir"/usr/share/icons/hicolor/16x16/apps/deezer.png
    install -Dm644 resources/win/deezer-1.png "$pkgdir"/usr/share/icons/hicolor/32x32/apps/deezer.png
    install -Dm644 resources/win/deezer-2.png "$pkgdir"/usr/share/icons/hicolor/48x48/apps/deezer.png
    install -Dm644 resources/win/deezer-3.png "$pkgdir"/usr/share/icons/hicolor/64x64/apps/deezer.png
    install -Dm644 resources/win/deezer-4.png "$pkgdir"/usr/share/icons/hicolor/128x128/apps/deezer.png
    install -Dm644 resources/win/deezer-5.png "$pkgdir"/usr/share/icons/hicolor/256x256/apps/deezer.png
    install -Dm644 "$pkgname".desktop "$pkgdir"/usr/share/applications/
    install -Dm755 deezer "$pkgdir"/usr/bin/
}
