# Maintainer: Chris Severance aur.severach aATt spamgourmet dott com

_brinf=(
[HL-2240D]
PRN_CUP_RPM=cupswrapperHL2240D-2.0.4-2.i386.rpm
PRN_CUP_DEB=cupswrapperHL2240D-2.0.4-2.i386.deb
PRN_LPD_RPM=hl2240dlpr-2.1.1-1.i386.rpm
PRN_LPD_DEB=hl2240dlpr-2.1.1-1.i386.deb
PRINTERNAME=HL2240D
SCANNER_DRV=
SCANKEY_DRV=
)
_brinf+=(
REQUIRE32LIB=yes
)

_opt_DEB=0

set -u
_brotheru='HL-2240D'
_brotherl="${_brotheru,,}"     # mfc-0000dw
_brotherlnd="${_brotherl//-/}" # mfc0000dw
_brotherund="${_brotheru//-/}" # MFC0000DW
_brotherxnd="${_brotherund}"   # upper or lower as required by scripts
pkgname="brother-${_brotherlnd}"
_cupver='2.0.4_2'
_lprver='2.1.1_1'
pkgver="${_cupver}"
pkgrel='1'
pkgdesc="LPR and CUPS driver for the Brother ${_brotheru} printer"
arch=('i686' 'x86_64')
url='https://support.brother.com/g/s/id/linux/en/'
license=('GPL' 'custom')
depends=('cups' 'ghostscript' 'psutils' 'a2ps' 'sed' 'grep')
# We look at the scripts and find these programs from which we decide on the depends above.
# gs: lpr rendering
# pdf2ps: cups rendering
# a2ps: rendering ascii text files
# pstops: pdf resizing
# psnup: printing n-up pages
# sed grep awk
# https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=670055
# Printing a text file fails when Liberation is the only TrueType font available
# depends+=('perl') # cupswrapper
optdepends=(
  'ttf-dejavu: printing text files from lpr'
)
options=('!strip')
#install="${pkgname}.install"
_brsource="br${_brotherlnd}cups_src-${_cupver//_/-}"
_dlf='http://www.brother.com/pub/bsc/linux'
_inf="${_brotherlnd}-${pkgver}.inf"
source=(
  "${_inf}::${_dlf}/infs/${_brotherund}"
  "${_dlf}/dlf/${_brsource}.tar.gz"
  'lpr-license.txt'
)
md5sums=('6e4b1274a8cd5df12ac50651ee571f9d'
         'fdb97b08f290dc0633cc840de8edbe0c'
         'aa6786c1cf18ee81639c7eb0d5cf5f2c'
         '34d8b6a318bd8159bff55d4ba17206fd'
         'c8549858d0e6a59fbacf7087bfdacfcb')
sha256sums=('e6ce4c7f25f622ca63fd5d947a1465e16b137f4ae86d4970af76ec9be358f6f4'
            'd13576ca827cb44ef853f5822b942eb13ee6c097fae49b0ca8ae9d324c63787a'
            '576f8d52351b450f417322885106490cdf7b97b45c7f6262f5eafaddf63adf29'
            '911d96bd17f9c2a8b2666853f20a8153a4bf2907080d56e3c0b3af20c1aa484d'
            'cbe9e3b4a4266d5c77f75dce82ac62f82ce4fa1e3bb260de2a4b25fe6d5f5f75')

_mismatch=0
_brverchk() {
  local _ver="$1"
  _ver="${_ver%.*}"
  _ver="${_ver%.*}"
  local _vb="${_ver%-*}"
  _vb="${_vb%-*}-"
  _ver="${_ver#${_vb}}"
  local _pv="$2"
  if [ -z "${_pv}" ]; then
    _pv="$3"
  fi
  if [ -z "${_pv}" ]; then
    _pv="$4"
  fi
  if [ "${_ver}" != "${_pv//_/-}" ]; then
    echo "Version mismatch: ${_ver} ${_pv//_/-}" 1>&2
    _mismatch=$((_mismatch+1))
  fi
}

_procinf() {
  local _fd _fvar _fval
  for _fd in "${_brinf[@]}"; do
    _fvar="${_fd%%=*}="
    _fval="${_fd##*=}"
    if [ ! -z "${_fval}" ]; then
      case "${_fvar}" in
      '['*);;
      PRN_CUP_RPM=)
        _brverchk "${_fval}" "${_cuprpmver:-}" "${_cupver:-}" "${pkgver}"
        if [ "${_opt_DEB}" -eq 0 ]; then
          source+=("${_dlf}/packages/${_fval}")
        fi
      ;;
      PRN_CUP_DEB=)
        _brverchk "${_fval}" "${_cupdebver:-}" "${_cupver:-}" "${pkgver}"
        if [ "${_opt_DEB}" -ne 0 ]; then
          source+=("${_dlf}/packages/${_fval}")
        fi
      ;;
      PRN_LPD_RPM=)
        _brverchk "${_fval}" "${_lprrpmver:-}" "${_lprver:-}" "${pkgver}"
        if [ "${_opt_DEB}" -eq 0 ]; then
          source+=("${_dlf}/packages/${_fval}")
        fi
      ;;
      PRN_LPD_DEB=)
        _brverchk "${_fval}" "${_lprdebver:-}" "${_lprver:-}" "${pkgver}"
        if [ "${_opt_DEB}" -ne 0 ]; then
          source+=("${_dlf}/packages/${_fval}")
        fi
      ;;
      PRN_DRV_RPM=)
        _brverchk "${_fval}" "" "" "${pkgver}"
        if [ "${_opt_DEB}" -eq 0 ]; then
          source+=("${_dlf}/packages/${_fval}")
        fi
      ;;
      PRN_DRV_DEB=)
        _brverchk "${_fval}" "" "" "${pkgver}"
        if [ "${_opt_DEB}" -ne 0 ]; then
          source+=("${_dlf}/packages/${_fval}")
        fi
      ;;
      REQUIRE32LIB=)
        if [ "${_fval}" = 'yes' ]; then
          depends_x86_64+=('lib32-glibc')
        fi
      ;;
      PRINTERNAME=);;
      SCANNER_DRV=)optdepends+=("${_fval}: Scanner support");;
      SCANKEY_DRV=)optdepends+=("${_fval}: Scanner button support");;
      *) echo "Unrecognized line: ${_fd}" 1>&2; exit 1;;
      esac
    fi
  done
  test "${_mismatch}" -eq 0 || exit 1
}
_procinf
unset -f _procinf _brverchk
unset _mismatch _brinf

# Must be same length as
#         'Brother'
_conflict='brother'

prepare() {
  set -u

  shopt -s nullglob
  local _deb
  local _debn=1
  for _deb in *.deb; do
    local _dx="debextract.${_debn}"
    mkdir "${_dx}"
    bsdtar -C "${_dx}" -xf "${_deb}"
    bsdtar -C "${_dx}" -xf "${_dx}"/control.tar.?z
    bsdtar -xf "${_dx}"/data.tar.?z
    rm "${_dx}"/*.tar.?z
    _debn=$((_debn+1))
  done
  shopt -u nullglob

  # Do not Install in '/usr/local'. Does not apply to all Brother models.
  # This may modify binary blobs which only
  # works when the old and new strings are exactly the same length.
  if [ -d 'usr/local' ]; then
    install -d 'usr/share'
    mv 'usr/local/Brother' "usr/share/${_conflict}"
    rmdir 'usr/local'
    sed -e "s:/usr/local/Brother:/usr/share/${_conflict}:g" -i $(grep -lare '/usr/local/Brother' ./)
  fi

  # setup cups-directories, some installers create these for us
  install -d 'usr/lib/cups/filter'
  install -d 'usr/share/cups/model'
  #install -d 'usr/share/ppd' # For cups we don't need the ppd file here.

  # /etc/printcap is managed by cups
  find . -type 'f' -name 'setupPrintcap*' -delete

  set +u
}

build() {
  set -u

  #local _basedir="opt/brother/Printers/${_brotherxnd}"
  #local _basedir="usr/share/${_conflict}"
  local _basedir="usr/share/${_conflict}/Printer/${_brotherxnd}"
  shopt -s nullglob
  local _wrapper_source=("${_basedir}/cupswrapper/cupswrapper${_brotherxnd}"*)
  shopt -u nullglob
  test "${#_wrapper_source[@]}" -eq 1 || echo "${}"
  _wrapper_source="${_wrapper_source[0]}"
  test -x "${_wrapper_source}" || echo "${}"
  echo "Wrapper source: ${_wrapper_source}"

  shopt -s nullglob
  local _brcupsconf=("${_basedir}/cupswrapper"/brcupscon*); test "${#_brcupsconf[@]}" -eq 1 || echo "${}"
  shopt -u nullglob
  _brcupsconf="${_brcupsconf[0]}"
  if [ ! -z "${_brsource:-}" ]; then
    shopt -s nullglob
    local _makedir=("${_brsource}/brcupsconf"*)
    shopt -u nullglob
    test "${#_makedir[@]}" -eq 1 || echo "${}"
    _makedir="${_makedir[0]}"
    test -d "${_makedir}" || echo "${}"

    # Source is available for the cups binary, not the lpr binaries so we can't
    # get away from multilib. Any usage of /opt is hardcoded into some binaries
    # for which we can't find an equal length replacement so we can't easily get
    # rid of that either.
    pushd "${_makedir}" > /dev/null
    if [ -s 'Makefile' ]; then
      make -s
      cp -p "${_brcupsconf##*/}" "${srcdir}/${_brcupsconf}"
    else
      # gcc options are pulled from other Brother makefiles.
      gcc -pipe -Wall -W -O2 -s -o "${srcdir}/${_brcupsconf}" "brcupsconfig.c"
    fi
    popd > /dev/null

    # Use the wrapper from the source file if available
    pushd "${_brsource}" > /dev/null
    [ -d 'scripts' ] && cd 'scripts'
    [ -d 'SCRIPT' ] && cd 'SCRIPT'
    [ -d 'cupswrapper' ] && cd 'cupswrapper'
    shopt -s nullglob
    local _wr2=("cupswrapper${_brotherxnd}"*)
    shopt -u nullglob
    if [ "${#_wr2[@]}" -eq 1 ]; then
      rm "${srcdir}/${_wrapper_source}"
      _wrapper_source="${_brsource}/${PWD#*/${_brsource}}/${_wr2[0]}"
      unset _wr2
      set +u; msg2 "Alternate wrapper ${_wrapper_source}"; set -u
    fi
    popd >/dev/null

    # Use the ppd supplied in the source
    shopt -s nullglob
    local _altppd=("${_brsource}"/[Pp][Pp][Dd]/)
    shopt -u nullglob
    if [ "${#_altppd[@]}" -eq 1 ]; then
      _altppd="${_altppd[0]}"
      local _altppdn="brother_${_brotherxnd}_printer_en.ppd"
      mv "${_altppd}/${_altppdn}" "${_basedir}/cupswrapper/"
      chmod 644 "${_basedir}/cupswrapper"/*.ppd
      set +u; msg2 "Alternate ppd ${_altppdn}"; set -u
    fi
  fi

  # Some Brother installers create files here
  #mkdir -p 'var/tmp'

  # Fix lpr driver.
  sed -e '# Fix sbin reference' \
      -e 's:/sbin/:/bin/:g' \
      -e '#Fix hash bang' \
      -e 's:#/bin/sh:#!/bin/sh:g' \
    -i "${_basedir}/lpd/psconvert2"

  # Fix page shifted off center that affects some printers
  # Letter prints off center shifted down and right with PaperType=A4
  # I can only test printing A4 on Letter paper. A4 appears to print correctly with PaperType=Letter
  sed -e 's:^\(PaperType\)=.\+$:\1=Letter:g' -i "${_basedir}/inf/br${_brotherxnd}rc"

  # Modify the installer so we can finish the install here in PKGBUILD.
  # cp -p "${_wrapper_source}" "${_wrapper_source}.Arch" # debug: diff compare with Total Commander
  sed -e '# Install to _srcdir. Some folders may not apply to this model.' \
      -e '# quick fix for path that needs to be double quoted' \
      -e "s:'/usr/share/ppd':"'"/usr/share/ppd":g' \
      -e 's:/usr:"${_srcdir}"&:g' \
      -e 's:/opt:"${_srcdir}"&:g' \
      -e 's:/var:"${_srcdir}"&:g' \
      -e 's:/etc:"${_srcdir}"&:g' \
      -e '# Remove unwanted srcdir from the generated files' \
      -e '/^cat <<ENDOFPPDFILE/,/^ENDOFPPDFILE/ s:"${_srcdir}"::g' \
      -e '/^cat <<!ENDOFWFILTER/,/^!ENDOFWFILTER!/ s:"${_srcdir}"::g' \
      -e '# Remove extra quotes where path was already quoted' \
      -e 's:""\${_srcdir}":"${_srcdir}:g' \
      -e '#s:/model/Brother:/model:g' \
      -e "# Stop the Install script after the files are generated. cups doesn't require a reload to see the printer driver." \
      -e 's:^sleep.*$:exit 0 # & #Arch Linux Compatible:g' \
      -e '# not using set -u allows bugs like this to slip by' \
      -e '#/Nup=/ s:`:\\`:g' \
      -e '# Fix a forgotten escape script error' \
      -e 's: \$errorcode: \\$errorcode:g' \
    -i "${_wrapper_source}"
  grep -lqe '#Arch Linux Compatible$' "${_wrapper_source}" || echo "${}"
  test -f "${_wrapper_source}.Arch" && echo "${}" # Halt for debugging
  # Generate PPD and wrapper. Use sh -x to debug
  # Possible bug: copying to /usr/share/ppd is disabled.
  _srcdir="${srcdir}" \
  sh -u -e "${_wrapper_source}" -i
  local _ppdir='usr/share/cups/model'
  chmod 644 "${_ppdir}"/*.ppd # Some installers make ppd executable
  rm -rf 'var'

  #local _wrapgen="${_basedir}/cupswrapper/brother_lpdwrapper_${_brotherxnd}"
  local _wrapgen="usr/lib/cups/filter/brlpdwrapper${_brotherxnd}"
  test -s "${_wrapgen}" || echo "${}"

  # Remove srcdir from the generated wrapper file.
  # No paths in the generated ppd.
  sed -e '# Remove the /home/... variety' \
      -e "s:${srcdir}::" \
    -i "${_wrapgen}"

  # Ensure all paths were removed
  grep -qFe $'${_srcdir}\n'"${srcdir}" "${_wrapgen}" && echo "${}"

  # We did everything in the installer so we can get rid of it.
  rm "${_wrapper_source}"

  # Misnamed printer does not sort or autodetect properly
  sed -e "s:Brother ${_brotherund} :Brother ${_brotheru} :g" -i "${_ppdir}"/*.ppd

  # Check to see if the lpd wrapper is referenced by the ppd
  # Check to see if our compiled code is referenced by the lpd wrapper
  local _nppdfound=0
  local _ncodefound=0
  local _lwrapper
  for _lwrapper in 'usr/lib/cups/filter'/*; do
    if grep -q "$(basename "${_lwrapper}")" "${_ppdir}"/*.ppd; then
      _nppdfound=$((_nppdfound+1))
    fi
    if grep -q "${_brcupsconf##*/}" "${_lwrapper}"; then
      _ncodefound=$((_ncodefound+1))
    fi
  done
  test "${_nppdfound}" -ne 0 || echo "${}"
  test "${_ncodefound}" -ne 0 || echo "${}"

  set  +u
}

package() {
  set -u

  local _dir
  # /var/spool is not used anywhere in this package. Maybe it's needed for non cups lprng.
  for _dir in 'usr' 'opt'; do # 'var'
    if [ -d "${srcdir}/${_dir}" ]; then
      cp -pR "${srcdir}/${_dir}" "${pkgdir}"
    fi
  done

  # Ensure we got a ppd and a filter for CUPS
  test ! -z "$(find "${pkgdir}/usr/share/cups/model" -type 'f' -name '*.ppd')" || echo "${}"
  test ! -z "$(find "${pkgdir}/usr/lib/cups/filter/" '(' -type 'f' -o -type 'l' ')')" || echo "${}"

  # Ensure there are no forbidden paths
  ! grep -alqr "/sbin" "${pkgdir}" || echo "${}"
  ! grep -alqr "/usr/tmp" "${pkgdir}" || echo "${}"

  install -Dpm644 <(sed -e 's:\r::g' "${_brsource}/Copying") "${pkgdir}/usr/share/licenses/${pkgname}/cupswrapper-licence.txt"
  install -Dpm644 'lpr-license.txt' "${pkgdir}/usr/share/licenses/${pkgname}/lpr-licence.txt"
  set +u
}
set +u
