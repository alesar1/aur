pkgname=briar-desktop-bin
_pkgname=briar-desktop
pkgver=0.2.0.beta
pkgrel=1
_bin_ver=0.2.0
_build_type=beta
pkgdesc='Prototyping the next generation for Briar on desktop devices'
arch=(any)
url="https://code.briarproject.org/briar/briar-desktop"
license=('GPL')
# let's limit it to <18 just in case 18 comes out sooner than expected (causing our hard java-17-path to cause trouble):
depends=('java-runtime>=17' 'java-runtime<18' 'bash')
source=("https://desktop.briarproject.org/jars/linux/${_bin_ver}-${_build_type}/${_pkgname}-linux-${_bin_ver}-${_build_type}.jar"
        "${_pkgname}.svg::https://code.briarproject.org/briar/${_pkgname}/-/raw/main/src/main/resources/images/logo_circle.svg"
        "briar16.png" "briar32.png" "briar48.png" "briar64.png" "briar128.png" "briar192.png"
        "${_pkgname}.desktop")
noextract=("${_pkgname}-linux-${_bin_ver}-${_build_type}.jar")
sha256sums=('1f31a0e0e3a1364172f8bfbf1d24bc34d4fe654fba83168d728ed0fb379ea591'
            '95400a8578272600e0b350c4b664c09631c737ce11e750faefe27473460d7923'
            '965d7c617e345b809f84c8bf73d9cb0acaf763c16a4b367698218b90c1c92669'
            '3feb96f9b9c01085170a44fdbf8bca43b1e586fe3b68dab37fb5cb9fd4ca1fa6'
            '3ba1a6a3561f3b879d8295cf3397bda6c7710f138f6cbd7effe4f650765610a0'
            '25eb65911af5e85d193e0d60418757a2ffe7b3d7d9d3debc41259bc0503972a7'
            '2a3e508279c2a440372bf73da2c4acf56a9b7a0bcad886a74863f5a723413a93'
            'a00d60b7aa59fb573c2e42f8bb4c23eb7038c91ea5ced47ebf9d537e3f3925cf'
            'ac7f0dc86bce256dc80fbee7c65705b6dc9cdbd8f0ad942f0535f82b65ef2f83')

package() {
  install -dm755 "$pkgdir/usr/bin/"
  cat << EOF > "$pkgdir/usr/bin/$_pkgname"
#!/bin/sh
exec /usr/lib/jvm/java-17-openjdk/bin/java -jar '/usr/share/java/briar-desktop.jar' "\$@"
EOF
  chmod +x "$pkgdir/usr/bin/$_pkgname"

  install -m 644 -D ${_pkgname}-linux-${_bin_ver}-${_build_type}.jar "$pkgdir/usr/share/java/$_pkgname.jar"

  install -Dm644 ${srcdir}/briar-desktop.svg \
    "$pkgdir/usr/share/icons/hicolor/scalable/apps/$_pkgname.svg"

  # generated with inkscape from the svg
  # just seemed unreasonable to require inkscape as a makedep
  # for size in 16 32 48 64 128 192; do
  # inkscape --export-background-opacity=0 \
  #     --export-width=${size} --export-type=png \
  #     --export-filename=${size}.png briar-desktop.svg
  # done

  for i in 16 32 48 64 128 192; do
    install -Dm644 ${srcdir}/briar${i}.png \
      "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/$_pkgname.png"
  done

  install -Dm644 ${srcdir}/$_pkgname.desktop \
    "$pkgdir/usr/share/applications/$_pkgname.desktop"
}
