# Maintainer: SaMaLerO <smlr[at]ukr[dot]net>
# Co-Maintainer: McModder <aur @ modder.pw>
# PLEASE do not mark it out-of date because "2.xx is released", *2.xx a separate project with same name from other dev team*
pkgname=tlauncher
pkgver=1.117.1
pkgrel=3
epoch=1
pkgdesc='TLauncher Legacy is freeware launcher of Minecraft.'
url='https://tlaun.ch'
arch=('any')
license=('GPLv3')
depends=('java-runtime>=8')
optdepends=('xorg-xrandr: Required for some old Minecraft versions')

_branch='aur'
# try to change repo if default sends 404
_repo='https://tlauncherrepo.com'
# _repo='https://u.tlauncher.ru'
_librepo='https://u.tlauncher.ru/repo/libraries'
# _librepo='https://tlauncherrepo.com/repo/libraries'
# _librepo='https://tlaun.ch/repo/libraries'
# _librepo='https://cdn.turikhay.ru/tlauncher/repo/libraries'

_bootstrap_checksum='807e5086f0f70ba14baea0e250172ea499ae1e13c84c1736f7ad436a5ccf8cf0'
_launcher_checksum='6f98b4c16845fd6138bb945078e39dd97275544fb4b69d48c933de233924b090'

source=("tl-bootstrap-${pkgver}.jar::${_repo}/${_branch}/bootstrap/${_bootstrap_checksum}.jar"
        "tl-launcher-${pkgver}.jar::${_repo}/${_branch}/launcher/${_launcher_checksum}.jar"

        "${_librepo}/org/jdom/jdom/2.0.2/jdom-2.0.2.jar"
        "${_librepo}/org/tukaani/xz/1.5/xz-1.5.jar"
        "${_librepo}/org/apache/commons/commons-lang3/3.4/commons-lang3-3.4.jar"
        "${_librepo}/org/apache/commons/commons-compress/1.10/commons-compress-1.10.jar"
        "${_librepo}/net/sf/jopt-simple/jopt-simple/4.9/jopt-simple-4.9.jar"
        "${_librepo}/commons-io/commons-io/2.5/commons-io-2.5.jar"
        "${_librepo}/com/google/code/gson/gson/2.6.2/gson-2.6.2.jar"
        "${_librepo}/com/github/zafarkhaja/java-semver/0.9.0/java-semver-0.9.0.jar"
        "${_librepo}/com/fasterxml/jackson/core/jackson-core/2.7.3/jackson-core-2.7.3.jar"
        "${_librepo}/org/slf4j/slf4j-api/1.7.21/slf4j-api-1.7.21.jar"
        "${_librepo}/com/getsentry/raven/raven/7.8.1/raven-7.8.1.jar"
        "${_librepo}/com/mojang/authlib/1.5.24/authlib-1.5.24.jar"
        "${_librepo}/com/google/guava/guava/14.0/guava-14.0.jar"
        "${_librepo}/org/apache/logging/log4j/log4j-api/2.8.1/log4j-api-2.8.1.jar"
        "${_librepo}/org/apache/logging/log4j/log4j-core/2.8.1/log4j-core-2.8.1.jar"
        "${_librepo}/ru/turikhay/app/nstweaker/1.0/nstweaker-1.0.jar"
        "${_librepo}/com/timgroup/java-statsd-client/3.1.0/java-statsd-client-3.1.0.jar"

        'tlauncher.install'
        'tlauncher.desktop'
        'tlauncher.bash')
noextract=("${source[@]##*/}" "tl-bootstrap-${pkgver}.jar" "tl-launcher-${pkgver}.jar")
sha256sums=("${_bootstrap_checksum}"
            "${_launcher_checksum}"

            '2bdf7a48fddc9259f5aa420eee328e939d71302a6a1b79a176e4fd47ee988b97'
            '86f30fa8775fa3a62cdb39d1ed78a6019164c1058864048d42cbee244e26e840'
            '734c8356420cc8e30c795d64fd1fcd5d44ea9d90342a2cc3262c5158fbc6d98b'
            '807c95293e41e8159477442077da6d0962a7f486d4b980be61f60a8db9cb290f'
            '26c5856e954b5f864db76f13b86919b59c6eecf9fd930b96baa8884626baf2f5'
            'a10418348d234968600ccb1d988efcbbd08716e1d96936ccc1880e7d22513474'
            'b8545ba775f641f8bba86027f06307152279fee89a46a4006df1bf2f874d4d9d'
            '2218c73b40f9af98b570d084420c1b4a81332297bd7fc27ddd552e903be8e93c'
            'f6d5ef0f62dcd9788ec9f7538c352eda7372eeaa3efc3a3f38c9c223d2cced48'
            '1d5aeb6bd98b0fdd151269eae941c05f6468a791ea0f1e68d8e7fe518af3e7df'
            '9f061ad2a82e2018d7b14a62ac3307e294afd7cda9b90714f129c423073735d7'
            '795f783dc6301d10e356d1f3db9952d71692ed8004ffdd843f0049f813a0d1a5'
            'c0127b076e3056f58294e4ae6c01a96599b8f58200345eb6f859192a2d9b2962'
            '1205ab764b1326f7d96d99baa4a4e12614599bf3d735790947748ee116511fa2'
            '815a73e20e90a413662eefe8594414684df3d5723edcd76070e1a5aee864616e'
            '6b4c15577b5256b64c7e3d69dcdbf8d18f17f68ac5928e36936bd6a40a91c218'
            'bbb82aadb5e4209527c15fcc40e514b6f4c921a37bc66b68b3611bec70c538e8'

            '4f601c6973d8d8259f1b9acc782a5f92ba5a040100b2ddf9766bbdaa6a8d8cdd'
            'bbb0eaa8d6714cc1e297d351f8e23acc25c08e4ddaf0bdcd0eb2c5a995c3561a'
            'ee533ebb5ba23496f38065622513cef21ad7f03e19bb68f6d2bae7bc5ca708f5')
install='tlauncher.install'

package() {
  install -Dm0644 "${srcdir}/tlauncher.desktop" "${pkgdir}/usr/share/applications/tlauncher.desktop"
  install -Dm0755 "${srcdir}/tlauncher.bash" "${pkgdir}/usr/bin/tlauncher"

  install -Dm0644 "${srcdir}/tl-bootstrap-${pkgver}.jar" "${pkgdir}/opt/tlauncher/bootstrap.jar"
  install -Dm0644 "${srcdir}/tl-launcher-${pkgver}.jar" "${pkgdir}/opt/tlauncher/launcher.jar"

  install -Dm0644 "${srcdir}/jdom-2.0.2.jar" "${pkgdir}/opt/tlauncher/lib/org/jdom/jdom/2.0.2/jdom-2.0.2.jar"
  install -Dm0644 "${srcdir}/xz-1.5.jar" "${pkgdir}/opt/tlauncher/lib/org/tukaani/xz/1.5/xz-1.5.jar"
  install -Dm0644 "${srcdir}/commons-lang3-3.4.jar" "${pkgdir}/opt/tlauncher/lib/org/apache/commons/commons-lang3/3.4/commons-lang3-3.4.jar"
  install -Dm0644 "${srcdir}/commons-compress-1.10.jar" "${pkgdir}/opt/tlauncher/lib/org/apache/commons/commons-compress/1.10/commons-compress-1.10.jar"
  install -Dm0644 "${srcdir}/jopt-simple-4.9.jar" "${pkgdir}/opt/tlauncher/lib/net/sf/jopt-simple/jopt-simple/4.9/jopt-simple-4.9.jar"
  install -Dm0644 "${srcdir}/commons-io-2.5.jar" "${pkgdir}/opt/tlauncher/lib/commons-io/commons-io/2.5/commons-io-2.5.jar"
  install -Dm0644 "${srcdir}/gson-2.6.2.jar" "${pkgdir}/opt/tlauncher/lib/com/google/code/gson/gson/2.6.2/gson-2.6.2.jar"
  install -Dm0644 "${srcdir}/java-semver-0.9.0.jar" "${pkgdir}/opt/tlauncher/lib/com/github/zafarkhaja/java-semver/0.9.0/java-semver-0.9.0.jar"
  install -Dm0644 "${srcdir}/jackson-core-2.7.3.jar" "${pkgdir}/opt/tlauncher/lib/com/fasterxml/jackson/core/jackson-core/2.7.3/jackson-core-2.7.3.jar"
  install -Dm0644 "${srcdir}/slf4j-api-1.7.21.jar" "${pkgdir}/opt/tlauncher/lib/org/slf4j/slf4j-api/1.7.21/slf4j-api-1.7.21.jar"
  install -Dm0644 "${srcdir}/raven-7.8.1.jar" "${pkgdir}/opt/tlauncher/lib/com/getsentry/raven/raven/7.8.1/raven-7.8.1.jar"
  install -Dm0644 "${srcdir}/authlib-1.5.24.jar" "${pkgdir}/opt/tlauncher/lib/com/mojang/authlib/1.5.24/authlib-1.5.24.jar"
  install -Dm0644 "${srcdir}/guava-14.0.jar" "${pkgdir}/opt/tlauncher/lib/com/google/guava/guava/14.0/guava-14.0.jar"
  install -Dm0644 "${srcdir}/log4j-api-2.8.1.jar" "${pkgdir}/opt/tlauncher/lib/org/apache/logging/log4j/log4j-api/2.8.1/log4j-api-2.8.1.jar"
  install -Dm0644 "${srcdir}/log4j-core-2.8.1.jar" "${pkgdir}/opt/tlauncher/lib/org/apache/logging/log4j/log4j-core/2.8.1/log4j-core-2.8.1.jar"
  install -Dm0644 "${srcdir}/nstweaker-1.0.jar" "${pkgdir}/opt/tlauncher/lib/ru/turikhay/app/nstweaker/1.0/nstweaker-1.0.jar"
  install -Dm0644 "${srcdir}/java-statsd-client-3.1.0.jar" "${pkgdir}/opt/tlauncher/lib/com/timgroup/java-statsd-client/3.1.0/java-statsd-client-3.1.0.jar"
}
