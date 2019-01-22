# Maintainer : Daniel Bermond < gmail-com: danielbermond >
# Contributor: Det <nimetonmaili g-mail>

pkgname=jre
pkgver=11.0.2
_build=9
_hash=f51449fcd52f4d52b93a989c5c56ed3c
_majver="${pkgver%%.*}"
pkgrel=1
pkgdesc='Oracle Java Runtime Environment'
arch=('x86_64')
url='https://www.oracle.com/java/'
license=('custom')
depends=('java-runtime-common' 'ca-certificates-utils' 'freetype2' 'libxtst'
         'libxrender' 'libnet')
optdepends=('alsa-lib: for basic sound support')
provides=("java-runtime=${_majver}" "java-runtime-headless=${_majver}"
          "java-runtime-jre=${_majver}" "java-runtime-headless-jre=${_majver}")
backup=("etc/java${_majver}-${pkgname}/management/jmxremote.access"
        "etc/java${_majver}-${pkgname}/management/jmxremote.password.template"
        "etc/java${_majver}-${pkgname}/management/management.properties"
        "etc/java${_majver}-${pkgname}/security/policy/limited/default_US_export.policy"
        "etc/java${_majver}-${pkgname}/security/policy/limited/default_local.policy"
        "etc/java${_majver}-${pkgname}/security/policy/limited/exempt_local.policy"
        "etc/java${_majver}-${pkgname}/security/policy/unlimited/default_US_export.policy"
        "etc/java${_majver}-${pkgname}/security/policy/unlimited/default_local.policy"
        "etc/java${_majver}-${pkgname}/security/policy/README.txt"
        "etc/java${_majver}-${pkgname}/security/java.policy"
        "etc/java${_majver}-${pkgname}/security/java.security"
        "etc/java${_majver}-${pkgname}/logging.properties"
        "etc/java${_majver}-${pkgname}/net.properties"
        "etc/java${_majver}-${pkgname}/sound.properties")
install="${pkgname}.install"
source=("https://download.oracle.com/otn-pub/java/jdk/${pkgver}+${_build}/${_hash}/jdk-${pkgver}_linux-x64_bin.tar.gz")
sha256sums=('7b4fd8ffcf53e9ff699d964a80e4abf9706b5bdb5644a765c2b96f99e3a2cdc8')

DLAGENTS=('https::/usr/bin/curl -fLC - --retry 3 --retry-delay 3 -b oraclelicense=a -o %o %u')

package() {
    cd "jdk-${pkgver}"
    
    local _jvmdir="/usr/lib/jvm/java-${_majver}-jdk"
    
    install -d -m755 "${pkgdir}/etc"
    install -d -m755 "${pkgdir}/${_jvmdir}"
    install -d -m755 "${pkgdir}/usr/share/licenses/${pkgname}"
    
    # conf
    cp -a conf "${pkgdir}/etc/java${_majver}-${pkgname}"
    ln -s "../../../../etc/java${_majver}-${pkgname}" "${pkgdir}/${_jvmdir}/conf"
    
    # bin
    install -D -m755 bin/{java,jjs,jrunscript,keytool,pack200} -t "${pkgdir}/${_jvmdir}/bin"
    install -D -m755 bin/{rmid,rmiregistry,unpack200}          -t "${pkgdir}/${_jvmdir}/bin"
    
    # libs
    cp -a lib "${pkgdir}/${_jvmdir}"
    rm -r "${pkgdir}/${_jvmdir}/lib/jfr"
    rm "${pkgdir}/${_jvmdir}/lib/"{ct.sym,libattach.so,libsaproc.so,src.zip}
    
    install -D -m644 release -t "${pkgdir}/${_jvmdir}"
    
    # replace JKS keystore with ca-certificates-utils
    rm "${pkgdir}${_jvmdir}/lib/security/cacerts"
    ln -s /etc/ssl/certs/java/cacerts "${pkgdir}${_jvmdir}/lib/security/cacerts"
    
    # legal/licenses
    cp -a legal/* "${pkgdir}/usr/share/licenses/${pkgname}"
    ln -s "$pkgname" "${pkgdir}/usr/share/licenses/java${_majver}-${pkgname}"
    ln -s "../../../share/licenses/${pkgname}" "${pkgdir}/${_jvmdir}/legal"
}
