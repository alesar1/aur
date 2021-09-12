# Maintainer: dalz <aur @t alsd d0t eu>
pkgname=moviebattles2
pkgver=1.8.1.2
_pkgver=1.8.1
pkgrel=1
pkgdesc="A fast-paced, action packed mod for Jedi Knight: Jedi Academy"
arch=('i686' 'x86_64')
url="https://www.moviebattles.org"
license=('unknown')
depends=('bin32-openjk')
source=(
    "$pkgname-${_pkgver}.zip::https://drive.google.com/uc?id=16HDOIJVgtjsfMnIXNh6dRoPDnlhRIHoa&export=download"
    'moviebattles2.desktop'
    'moviebattles2.png'
    'moviebattles2'
    "$pkgname-$pkgver-hotfix.zip::http://update.moviebattles.org/MoviebattlesII_UPGRADE_V1.8.1_V1.8.1.2.zip")
md5sums=('f045dc24066ac4fb8ff0bebc3577b7a8'
         '14d9db62e04f1cbed851ba7e098ff207'
         '3d20693ab4602ba56d61e9ee401e1dba'
         '400671872ffab35708b1acd1129b3797'
         '28ab2a844041b9e5d5962e91846c13f3')
install=moviebattles2.install

makedepends=('unzip')
noextract=("$pkgname-$pkgver-hotfix.zip")
prepare() {
    cd "$srcdir"
    unzip -o "$pkgname-$pkgver-hotfix.zip"
}

cat > gdrive-dl <<EOF
#!/bin/sh
tcf=cookie
confirm=\$(curl -c - -o /dev/null "\$1" | tee \$tcf | awk '/download/ { print \$NF }')
curl -Lb \$tcf -C - -o "\$2" "\$1&confirm=\$confirm"
EOF
chmod +x gdrive-dl

DLAGENTS=("https::$(pwd)/gdrive-dl %u %o" "${DLAGENTS[@]}")

package() {
    destdir=$pkgdir/opt/moviebattles2
    mkdir "$pkgdir/opt"

    cp -R "$srcdir" "$destdir"
    ln -s /opt/openjk/JediAcademy/{openjk.i386,openjk_sp.i386,openjkded.i386,rd-vanilla_i386.so,rdsp-vanilla_i386.so,base} "$destdir"

    install -D "$srcdir/moviebattles2.desktop" -t "$pkgdir/usr/share/applications/"
    install -Dm644 "$srcdir/moviebattles2.png" -t "$pkgdir/usr/share/pixmaps/"
    install -D "$srcdir/moviebattles2" -t "$pkgdir/usr/bin/"
}
