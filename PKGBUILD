# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com
# Contributor: Po-An,Yang(Antonio) <yanganto gmail.com>

# Todo: If there'a any files left in the cache they should probably be deleted on uninstall
#
#       Yes, we need to figure where is the cache, but I am not using this package recently.
#       I just pack and run it, and to check the package is good for use.  
#       If you have and an idea to do this, please kindly do it.
#       Thanks.  
#                                                                                   Antonio

# Todo: Can we build the source code?
#       It is cool. :) 
#                                                                                   Antonio

set -u
pkgname='networkminer'
pkgver=2.7.3
pkgrel='1'
pkgdesc='A Network Forensic Analysis Tool for advanced Network Traffic Analysis, sniffer and packet analyzer'
arch=('any')
url='http://www.netresec.com/'
license=('GPL2')
depends=('mono')
#_verwatch=('http://www.netresec.com/?page=NetworkMiner' '\s\+<[nt][a-z]\+>NetworkMiner\s\([0-9][^<]\+\)</[a-z]\+>.*' 'f')
_srcname="NetworkMiner_${pkgver//\./-}"
source=("${_srcname}.zip::https://www.netresec.com/?download=NetworkMiner")
md5sums=('5e4f0af82b4ccef91602c0a25d93545e')
sha256sums=('cf477b651c3bcc70d6f5d50f9bdcb6d8cf2dd85b7018109ff474b9df3c7a0f7e')

package() {
  set -u
  install -d "${pkgdir}/opt/"
  mv "${srcdir}/${_srcname}" "${pkgdir}/opt/NetworkMiner"
  #chmod +x "${pkgdir}/opt/NetworkMiner/NetworkMiner.exe"
  chmod -R go+w "${pkgdir}/opt/NetworkMiner/AssembledFiles/" "${pkgdir}/opt/NetworkMiner/Captures/"

  # Launcher
  install -Dm755 <(cat << EOF
#!/bin/sh
mono /opt/NetworkMiner/NetworkMiner.exe
EOF
  ) "${pkgdir}/usr/bin/Networkminer.sh"

  # Desktop file for config tool
  install -Dm644 <(cat << EOF
[Desktop Entry]
Name=Network Miner
GenericName=Packet analyser
Comment=NetworkMiner packet analyser
Exec=Networkminer.sh
Terminal=false
Type=Application
#Icon=
Categories=Application;Utility;
MimeType=application/x-executable
EOF
  ) "${pkgdir}/usr/share/applications/NetworkMiner.desktop"
  set +u
}
set +u
