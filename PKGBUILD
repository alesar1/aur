# Maintainer: Runnytu < runnytu at gmail dot com >
# OldMaintainer: Alexey Kharlamov <der@2-47.ru>
# Contributor: David Dufberg Tøttrup <david at dufberg dot se>
# Contributor: Jordi De Groof <jordi(dot)degroof(at)gmail(dot)com>
# Contributor: pyther <pyther@pyther.net>
# Contributor: z3ntu <WEI16416@spengergasse.at>

pkgname=packettracer
pkgver=7.0
pkgrel=3
pkgdesc="Network design and emulation software for Cisco's Networking Academy instructors and students."
arch=( 'i686' 'x86_64' )
depends_x86_64=('libopenssl-1.0-compat') && makedepends_x86_64=('gcc-multilib')
depends_i686=('qtwebkit' 'libpng' 'lib32-libopenssl-1.0-compat')
url="http://www.netacad.com/about-networking-academy/packet-tracer"
license=('custom')

source=('packettracer' 'linguist' 'packettracer.sh')
source_i686=('local://PacketTracer70_32bit_linux.tar.gz')
source_x86_64=('local://PacketTracer70_64bit_linux.tar.gz')
sha512sums=(
'ddfe0b7dfd6fff32ff5b52429c07b2ea85bcc7b10abb465c16515d9cfaa5bc2c88ee0c38d022dc84072703f2d1d327f7c43c61451ec1605adc8cf049fa124473' 'bd800d5335e54436f760e4a21a381c5cca4752c864c559ebc302bdcfc9819a3cf76fecc3b1490fdfd18d0f98e14c0886d8c6b7776dd3814af7ade17b9c85d80a'
'3f4732213a9ca7c95f742edbdccf4d84c95e1c9e00d3dfa72e79b8039ef86bed29bc5b76586402a233ce3af409c0a56c759c2554e17962c292a6bd333654ce71')
sha512sums_i686=('eb80fa9b56de1130ed751e67a20845f3b5c79e9967a64634f5a5058c4b1ac3274d68d7662456c1d247a984d27e5056da324efb4424fe8669a0aec11782b3e1b2')
sha512sums_x86_64=('77e52d67c6d4a50e5e2508ea9a2a274d54dd1fbbbdd5995d0b4e975f4acf7ceb98a8914c0e7fe63bf8dacea65635668860bf2733d9d10377a2300ceecf657359')

# We don't want to strip anything from the static libraries
# We want to keep all binaries orginal (Cisco is goofy)
options=(!strip)
install=pt.install

package() {
  cd ${srcdir}/PacketTracer70

  mkdir -p ${pkgdir}/usr/share/packettracer/{art,backgrounds,bin,extensions,help,languages,lib,saves,Sounds,templates}

  cp -r ./art/* ${pkgdir}/usr/share/packettracer/art
  cp -r ./backgrounds/* ${pkgdir}/usr/share/packettracer/backgrounds
  cp -r ./bin/* ${pkgdir}//usr/share/packettracer/bin
  cp -r ./extensions/* ${pkgdir}/usr/share/packettracer/extensions
  cp -r ./languages/* ${pkgdir}/usr/share/packettracer/languages
  cp -r ./saves/* ${pkgdir}/usr/share/packettracer/saves
  cp -r ./Sounds/* ${pkgdir}/usr/share/packettracer/Sounds
  cp -r ./templates/* ${pkgdir}/usr/share/packettracer/templates
  cp -r ./lib/* ${pkgdir}/usr/share/packettracer/lib

  # Help Files that are optinal uncomment to include them (55 MB)
  # cp -r ./help/* ${pkgdir}/usr/share/packettracer/help

  # Mime Info for PKA, PKT, PKZ
  install -D -m644 ./bin/Cisco-pka.xml ${pkgdir}/usr/share/mime/packages/Cisco-pka.xml
  install -D -m644 ./bin/Cisco-pkt.xml ${pkgdir}/usr/share/mime/packages/Cisco-pkt.xml
  install -D -m644 ./bin/Cisco-pkz.xml ${pkgdir}/usr/share/mime/packages/Cisco-pkz.xml

  rm ${pkgdir}/usr/share/packettracer/bin/Cisco-pka.xml
  rm ${pkgdir}/usr/share/packettracer/bin/Cisco-pkt.xml
  rm ${pkgdir}/usr/share/packettracer/bin/Cisco-pkz.xml

  # Install Mimetype Icons
  install -D -m644 ./art/pka.png ${pkgdir}/usr/share/icons/hicolor/48x48/mimetypes/application-x-pka.png
  install -D -m644 ./art/pkt.png ${pkgdir}/usr/share/icons/hicolor/48x48/mimetypes/application-x-pkt.png
  install -D -m644 ./art/pkz.png ${pkgdir}/usr/share/icons/hicolor/48x48/mimetypes/application-x-pkz.png

  # EULA
  install -D -m644 eula.txt ${pkgdir}/usr/share/licenses/$pkgname/eula.txt

  # Shell script to start PT and tell it to use included qt files
  # Arch's QT causes PT to crash when saving!
  install -D -m755 ${srcdir}/packettracer ${pkgdir}/usr/share/packettracer/packettracer

  # Symlink to /usr/bin
  mkdir -p ${pkgdir}/usr/bin/
  ln -s /usr/share/packettracer/packettracer ${pkgdir}/usr/bin/packettracer

  # Improved version of Cisco's linguist script
  install -D -m755 ${srcdir}/linguist ${pkgdir}/usr/share/packettracer/linguist

  # Add enviroment variable
  install -D -m755 ${srcdir}/packettracer.sh ${pkgdir}/etc/profile.d/packettracer.sh

  # Desktop File
  install -D -m644 ./bin/Cisco-PacketTracer.desktop ${pkgdir}/usr/share/applications/Cisco-PacketTracer.desktop
  sed 's/\/usr\/local\/PacketTracer6/\/usr\/share\/packettracer/' -i ${pkgdir}/usr/share/applications/Cisco-PacketTracer.desktop
  rm ${pkgdir}/usr/share/packettracer/bin/Cisco-PacketTracer.desktop
}

