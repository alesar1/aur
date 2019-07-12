# Maintainer: Daniel Playfair Cal <daniel.playfair.cal at gmail dot com>
# Maintainer: Federico Giuliani <federico.giuliani86 at gmail dot com>

pkgname=airsonic-advanced-git
pkgver=11.0.0.SNAPSHOT.20211119194245.r0.g918333a5
pkgrel=1
pkgdesc="A free, web-based media streamer and jukebox. (fork of Airsonic)"
arch=('any')
url="https://github.com/airsonic-advanced/airsonic-advanced/"
license=('GPL3')
depends=('java-runtime-headless')
optdepends=('ffmpeg: transcode support')
makedepends=('java-environment' 'maven')
backup=('etc/airsonic/airsonic.conf')
provides=(airsonic)
conflicts=(airsonic)
source=(git+https://github.com/airsonic-advanced/airsonic-advanced.git
        airsonic.sysusers
        airsonic.tmpfiles
	0001-fix-ignore-unused-declared-dependency-on-org.springf.patch)

sha256sums=('SKIP'
            '25af0b92b247df928db5ac8fec3fb4fa2cdc717e649729d5e0c059a5b81e058e'
            '952c15c8c6b53b9c63a96eb6b2402eae42bde56dc9c6c60484cf039a03a82963'
            'b92b73ddca1cbef2e2095a3a99ab2d761dcfeda2574397c212817db9c0208860')

pkgver() {
  cd airsonic-advanced
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "${srcdir}/airsonic-advanced"
    patch -Np1 -i ../0001-fix-ignore-unused-declared-dependency-on-org.springf.patch
    sed -i 's/\/var\/airsonic/\/var\/lib\/airsonic/' \
        "contrib/airsonic.service" \
        "contrib/airsonic-systemd-env"
    sed -i 's/\/etc\/sysconfig\/airsonic/\/etc\/airsonic\/airsonic.conf/' \
        "contrib/airsonic.service"
}

build() {
  cd "${srcdir}/airsonic-advanced"
  mvn --settings=./.mvn/settings.xml clean compile package verify -e -DskipTests -Dcheckstyle.skip=true
}

check() {
  cd "${srcdir}/airsonic-advanced"
  mvn test
}

package() {
  cd "${srcdir}"

    install -dm755 "${pkgdir}/var/lib/airsonic"
    install -dm755 "${pkgdir}/var/lib/airsonic/playlists"
    install -dm755 "${pkgdir}/usr/lib/systemd/system"
    install -dm755 "${pkgdir}/etc/airsonic"

    install -Dm644 \
        "airsonic-advanced/airsonic-main/target/airsonic.war" \
        "${pkgdir}/var/lib/airsonic/airsonic.war"
    install -Dm644 \
        "airsonic-advanced/contrib/airsonic-systemd-env" \
        "${pkgdir}/etc/airsonic/airsonic.conf" 
    install -Dm644 \
        "airsonic-advanced/contrib/airsonic.service" \
        "${pkgdir}/usr/lib/systemd/system/airsonic.service"
    install -Dm644 \
        "${srcdir}/airsonic.sysusers" \
        "${pkgdir}/usr/lib/sysusers.d/airsonic.conf"
    install -Dm644 \
        "${srcdir}/airsonic.tmpfiles" \
        "${pkgdir}/usr/lib/tmpfiles.d/airsonic.conf"
}
