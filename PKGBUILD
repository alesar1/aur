# Maintainer: eomanis at web dot de

pkgname='borgit'
_pkgverUpstream="0.0.5"
pkgver="${_pkgverUpstream//-/.}"
pkgrel=1
pkgdesc="Write your Borg backup jobs with sourced bash configuration files"
arch=('any')
url='https://eomanis.duckdns.org/permshare/borgit/'
license=('GPL3')
depends=('bash' 'borg' 'coreutils' 'findutils')
source=("https://eomanis.duckdns.org/permshare/borgit/borgit-${_pkgverUpstream}.tar.gz")
sha384sums=('06210fe04dad92285f0dd2c0494c852f492e3a72799593a8f851a0f0589485d8e3d307660913256782ddbf3505ab85c8')

package() {
    local srcRootDir="${srcdir}/${pkgname}-${_pkgverUpstream}"
    
    # Place the main bash scripts into /usr/bin
    mkdir -p "${pkgdir}/usr/bin"
    cd "${pkgdir}/usr/bin"
    cp -t . "${srcRootDir}/borgit"
    chmod u=rwx,go=rx "borgit"
    cp -t . "${srcRootDir}/borgem"
    chmod u=rwx,go=rx "borgem"
    
    # Gzip and place the manual pages
    mkdir -p "${pkgdir}/usr/share/man"
    cd "${pkgdir}/usr/share/man"
    mkdir "man1"
    cd "man1"
    gzip --fast --to-stdout - < "${srcRootDir}/borgit.1" > "borgit.1.gz"
    gzip --fast --to-stdout - < "${srcRootDir}/borgem.1" > "borgem.1.gz"
    cd - > /dev/null
    chmod -R u=rwX,go=rX .
}
