# Maintainer: Paul Bastian <paul.bastian@posteo.de>
pkgname=librespot-java
pkgver=1.5.2
pkgrel=5
pkgdesc="A Spotify Connect enabled headless client"
arch=('any')
url="https://github.com/librespot-org/librespot-java"
license=('APACHE')
depends=('java-runtime')
conflicts=('librespot-java-git')
backup=(etc/librespot-java/config.toml)
source=("https://github.com/librespot-org/librespot-java/releases/download/v$pkgver/librespot-player-$pkgver.jar"
        "https://raw.githubusercontent.com/paulbastian/aur/master/librespot-java/config.toml"
        "https://raw.githubusercontent.com/paulbastian/aur/master/librespot-java/librespot-java.service")
noextract=("librespot-player-$pkgver.jar")
sha256sums=('ca0ea63d92dcfeb1b0834b960c644c2b55041f0439d468f1a7ad92928ac007e1'
            '732a44a47780420484fdddff0c2ec206f58af3b4eddd71aa871e5b755890e3ee'
            '4d0b3452768be2eb380f6ae49c5d7fdfb0a095f699f71ce2a1697260b0c89b3a')

package() {	
  cd "$srcdir"

  mkdir -p "${pkgdir}"/usr/share/java/librespot
  #install -m644 -Dt "$pkgdir/usr/share/java/librespot" librespot-player-$pkgver.jar
  install -D -m644 librespot-player-$pkgver.jar "$pkgdir/usr/share/java/librespot/librespot-player.jar" 
  
  mkdir -p "${pkgdir}"/etc/librespot-java
  install -m644 -Dt "$pkgdir/etc/librespot-java" config.toml

  install -m644 -Dt "$pkgdir/usr/lib/systemd/system" librespot-java.service
}
