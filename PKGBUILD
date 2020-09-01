# Maintainer: scpketer <scpketer@krampus.pro>
pkgname=recaf
pkgver=2.5.0
pkgrel=1
pkgdesc="A modern Java bytecode editor"
arch=("any")
url="https://github.com/Col-E/Recaf"
license=("MIT")
depends=("java-runtime" "java-openjfx")
noextract=("$pkgname-$pkgver.jar")
source=("https://github.com/Col-E/Recaf/releases/download/$pkgver/$pkgname-$pkgver-J8-jar-with-dependencies.jar")
sha256sums=('SKIP')

prepare() {
    # Extract logo
    jar xf "$srcdir/$pkgname-$pkgver-J8-jar-with-dependencies.jar" icons/logo.png
}

package() {
    # Install JAR to canonical location
    install -Dm644 "$srcdir/$pkgname-$pkgver-J8-jar-with-dependencies.jar" "$pkgdir/usr/share/java/$pkgname/$pkgname.jar"
    
    # Install logo to canonical location
    install -Dm644 "$srcdir/icons/logo.png" "$pkgdir/usr/share/pixmaps/recaf.png"
    
    # Build exec script
    printf '#!/usr/bin/env bash\nexec java -cp "/usr/lib/jvm/default-runtime/lib/*:/usr/share/java/%s/%s.jar" "me.coley.recaf.Recaf" "$@"' "$pkgname" "$pkgname" > "$srcdir/recaf"
    
    # Write .desktop file
    echo -e '[Desktop Entry]\nType=Application\nVersion=1.0\nName=Recaf\nComment=A modern Java bytecode editor\nPath=/usr/bin\nExec=recaf %u\nIcon=recaf\nTerminal=false\nCategories=Development;Java;' > "$srcdir/recaf.desktop"

    # Install exec script to canonical location
    install -Dm644 "$srcdir/recaf" "$pkgdir/usr/bin/recaf"

    # Install .desktop to canonical location
    install -Dm644 "$srcdir/recaf.desktop" "$pkgdir/usr/share/applications/recaf.desktop"

    # Modify permissions
    chmod 775 "$pkgdir/usr/bin/$pkgname"
}
