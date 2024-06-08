import React from 'react';

const Card_participant = () => {
    return (
        <div class="border border-black p-4 pb-0 flex-wrap">
            <div class="flex justify-between space-2 flex-wrap mb-5">
                <div>
                    <h4 class="text-primary text-[#579C4C] text-xl leading-6 font-bold mb-3">LANA RONCE</h4>
                    <div class="flex items-center space-x-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99952 0.0684035C4.96874 0.108898 4.94333 0.184857 4.94309 0.237133C4.94281 0.292721 4.83084 0.400647 4.67362 0.496853C4.34879 0.695585 4.20958 0.972301 4.18304 1.47174C4.1733 1.65489 4.14802 1.85755 4.12685 1.92203C4.09429 2.02118 4.10395 2.03388 4.18948 2.00443C4.24512 1.98529 4.29064 1.99468 4.29064 2.02529C4.29064 2.05585 4.31717 2.08088 4.34959 2.08088C4.382 2.08088 4.44491 2.19132 4.48936 2.32631C4.56701 2.5621 4.61593 2.59885 4.83811 2.5883C4.86992 2.58682 4.88545 2.60793 4.87262 2.63517C4.8598 2.66248 4.90788 2.72328 4.97947 2.77022C5.11929 2.86201 5.35178 2.81826 5.41259 2.68874C5.46291 2.58167 5.6794 2.67315 5.79814 2.85158C5.85397 2.93545 5.98581 3.12074 6.09121 3.2634C6.19657 3.40605 6.3487 3.69418 6.42933 3.90371C6.61695 4.39143 6.62157 4.70661 6.44761 5.1558C6.23187 5.71298 6.1906 5.76826 6.02331 5.7242C5.89739 5.69107 5.87631 5.70322 5.87631 5.809C5.87631 6.02902 5.633 6.01546 5.24442 5.77378C5.05502 5.65604 4.91026 5.53811 4.92267 5.51167C4.93507 5.48528 4.88139 5.41411 4.80341 5.35349C4.68234 5.25943 4.67372 5.23747 4.74428 5.20335C4.80528 5.17384 4.78187 5.15181 4.65506 5.11923C4.56053 5.095 4.40121 4.98284 4.30104 4.87007C4.19704 4.75294 4.01067 4.6263 3.86666 4.57494C3.62755 4.4896 3.62288 4.48432 3.77763 4.47315C3.91483 4.46334 3.89254 4.44745 3.63771 4.37357C3.41376 4.30866 3.30561 4.30283 3.22362 4.35136C3.06347 4.4461 3.05302 4.39247 3.165 4.0501C3.2198 3.88254 3.26462 3.67111 3.26462 3.58024V3.41507L3.05577 3.66835C2.81307 3.96261 2.76406 3.9774 2.72413 3.76817C2.70804 3.68381 2.67932 3.61478 2.66038 3.61478C2.6414 3.61478 2.50401 3.7829 2.35505 3.98838C2.20609 4.1938 2.00345 4.43223 1.90476 4.51819C1.72689 4.67299 1.57131 4.92314 1.16593 5.70617C1.0388 5.95171 0.931255 6.10032 0.893152 6.08314C0.691026 5.99196 0.426079 6.47379 0.512964 6.77444C0.553772 6.91574 0.527608 6.9898 0.279451 7.4345C0.125781 7.70999 0 7.98057 0 8.03573C0 8.09095 0.0436992 8.18814 0.0971456 8.25177C0.150545 8.31533 0.222927 8.45768 0.257998 8.56806C0.297406 8.69218 0.354584 8.76869 0.40803 8.76869C0.455507 8.76869 0.516602 8.79796 0.543792 8.83373C0.628438 8.94509 1.03241 8.87766 1.09122 8.74237C1.11948 8.67727 1.19359 8.54566 1.2559 8.44995L1.36918 8.27594L1.49165 8.43031C1.55899 8.51517 1.63776 8.58462 1.66668 8.58462C1.73733 8.58462 1.7856 8.36859 1.7489 8.21649C1.72875 8.13286 1.74051 8.09377 1.78588 8.09377C1.82249 8.09377 1.92393 8.03003 2.01124 7.95204C2.12596 7.84964 2.29134 7.79068 2.60773 7.73938C2.84852 7.70042 3.06393 7.68349 3.08641 7.70177C3.10889 7.72005 3.22008 7.9883 3.33345 8.29784C3.55372 8.89938 3.79922 9.4992 3.92878 9.75247C4.02121 9.93311 4.10185 10.5872 4.10315 11.1672C4.10432 11.6789 4.19899 12.0951 4.38251 12.3956L4.5263 12.6309L4.20846 12.8415C4.03371 12.9573 3.72278 13.1372 3.51758 13.2414C3.06631 13.4703 2.83135 13.7562 2.72922 14.2006C2.6907 14.3683 2.50247 14.8351 2.31097 15.2379C2.09504 15.6922 1.94445 16.0825 1.91465 16.2655C1.88816 16.4278 1.80333 16.7439 1.7261 16.9681C1.56702 17.4296 1.53236 17.949 1.65647 18.0117C1.76229 18.0651 1.97612 17.9275 2.18902 17.6689C2.34465 17.4798 2.37851 17.3984 2.37851 17.2126C2.37851 17.0683 2.35323 16.9738 2.30855 16.9513C2.20702 16.9 2.22274 16.7187 2.346 16.5196C2.40504 16.4242 2.58194 16.001 2.73906 15.5792C2.99538 14.8912 3.26345 14.3523 3.34963 14.352C3.36698 14.3519 3.37435 14.511 3.36596 14.7055L3.35071 15.0591L4.03138 15.9588C4.68295 16.82 4.71797 16.8563 4.84963 16.8066C4.92528 16.778 5.00759 16.738 5.03264 16.7177C5.05763 16.6974 5.19801 16.6516 5.34455 16.6159C5.63197 16.5461 6.08426 16.2451 6.12815 16.0946C6.16765 15.9593 5.96105 15.7169 5.76494 15.6685C5.44258 15.5889 5.15455 15.7589 5.07414 16.0761C5.04849 16.1774 4.56351 15.8574 4.3286 15.5843C4.07261 15.2867 3.89716 14.94 3.93568 14.8079C3.98106 14.6522 4.24129 14.5532 4.78667 14.484C5.07233 14.4477 5.49206 14.3599 5.71942 14.2888C5.94678 14.2177 6.18197 14.1464 6.24204 14.1305C6.31479 14.1111 6.3771 14.0214 6.42859 13.8616C6.49565 13.6536 6.52107 13.6267 6.62022 13.6592C6.77618 13.7103 6.99752 13.7048 7.78844 13.6302C8.42252 13.5704 8.51332 13.545 9.24422 13.223C9.67296 13.0341 10.0299 12.8795 10.0375 12.8795C10.045 12.8795 10.051 13.3006 10.0508 13.8152C10.0502 15.2061 10.1169 15.0977 8.72119 15.9766C8.3749 16.1946 7.91329 16.508 7.69535 16.6729C7.35872 16.9278 7.28205 17.0166 7.18542 17.2636C7.03627 17.6448 7.08426 17.7613 7.38475 17.7477C7.79847 17.7288 8.06826 17.5394 8.06826 17.2679C8.06826 17.0949 8.19843 17.0086 9.83638 16.0964C10.4626 15.7476 10.9927 15.4264 11.0144 15.3827C11.0663 15.2781 11.0808 15.1724 11.1425 14.4509C11.1999 13.7798 11.2977 13.4283 11.5003 13.1648C11.6331 12.9921 11.938 12.7568 12.0289 12.7568C12.1062 12.7568 12.1617 12.9501 12.2414 13.4964C12.283 13.7814 12.3807 14.4068 12.4585 14.8861C12.557 15.4929 12.6022 15.9495 12.6074 16.3894C12.6142 16.9709 12.6028 17.0601 12.4642 17.5119C12.3814 17.7819 12.2242 18.2075 12.1148 18.4579C11.9215 18.9 11.9079 18.9163 11.636 19.0325C11.1841 19.2257 11.0623 19.3078 10.9788 19.4754C10.8707 19.6923 10.9451 19.904 11.1481 19.9575C11.4469 20.0361 11.7339 20.0031 11.8182 19.8805C11.8623 19.8165 11.9876 19.7345 12.0967 19.6984C12.3508 19.6142 12.4133 19.5176 12.5874 18.9396C12.7272 18.4757 13.0538 17.6044 13.4331 16.6836C13.6419 16.1765 13.6447 16.1231 13.5059 15.3031C13.4196 14.7934 13.4089 13.7809 13.4868 13.4869C13.5172 13.3722 13.6531 13.1012 13.7888 12.8848C14.0835 12.4147 14.3709 11.6656 14.5155 10.9909L14.6208 10.4994L14.7697 10.5311C14.8553 10.5494 15.0178 10.5159 15.1523 10.4523C15.4349 10.3186 15.4629 10.3319 15.9743 10.8433C16.4025 11.2715 16.6345 11.5595 16.9274 12.0266C17.4089 12.7945 18.1092 13.4627 18.625 13.6464C18.9053 13.7463 18.9372 13.7463 19.1965 13.6474C19.4186 13.5626 19.5238 13.4733 19.7469 13.1802C19.8986 12.9808 20.012 12.8038 19.999 12.7867C19.986 12.7695 19.8855 12.7972 19.7756 12.8482C19.5162 12.9686 19.3819 12.9664 19.5527 12.8445C19.7546 12.7003 19.7038 12.6917 19.4171 12.8215C19.0739 12.9769 19.0425 12.9721 19.2003 12.789L19.3312 12.6371L19.1386 12.734C18.961 12.8234 18.933 12.8229 18.7783 12.7263C18.5954 12.6121 18.218 12.1085 17.6805 11.2615C17.4908 10.9627 17.2389 10.6349 17.1208 10.5332C17.0027 10.4316 16.9401 10.3635 16.9817 10.3819C17.0233 10.4003 17.1597 10.4351 17.2848 10.459C17.5571 10.5111 17.709 10.6065 17.942 10.8713L18.1165 11.0695L18.0094 10.8855C17.8813 10.6653 17.5867 10.3483 17.3141 10.1375C17.2051 10.0531 17.1159 9.97366 17.1159 9.96084C17.1159 9.88967 17.6802 10.2541 17.9087 10.4729L18.072 10.6291L17.9087 10.4009C17.6818 10.0836 17.253 9.8223 16.786 9.71676C16.3002 9.607 15.9102 9.42121 15.6265 9.1645C15.2993 8.86839 15.0827 8.7401 14.6143 8.56517C14.3798 8.47762 14.1093 8.33576 14.0131 8.24986C13.917 8.16403 13.8204 8.09377 13.7986 8.09377C13.7768 8.09377 13.6134 7.97106 13.4356 7.82111C12.7059 7.20571 12.3267 7.06023 11.7347 7.16859C11.5468 7.20295 11.3353 7.25995 11.2648 7.29516C11.1944 7.33044 10.9362 7.39892 10.6912 7.44733C10.2719 7.53022 10.2392 7.52875 10.1368 7.42278C10.0385 7.32099 10.0352 7.30228 10.1027 7.22859C10.2247 7.09533 10.2544 6.91193 10.1785 6.75959C10.1406 6.68351 10.0742 6.62123 10.031 6.62123C9.98781 6.62123 9.77803 6.77309 9.56486 6.95869C9.35163 7.14429 9.15141 7.29615 9.11989 7.29615C9.08836 7.29615 9.03473 7.17883 9.00068 7.03538C8.96664 6.89193 8.89817 6.68394 8.84851 6.57313C8.79888 6.46232 8.7494 6.24677 8.73858 6.09418C8.72109 5.84796 8.74754 5.74979 8.97354 5.22194C9.11364 4.89479 9.30154 4.40628 9.39118 4.13631C9.48077 3.86634 9.58687 3.56263 9.62702 3.46139C9.72991 3.20186 9.71983 2.7242 9.60492 2.41184C9.55231 2.26888 9.41473 2.04996 9.29921 1.92547C9.11154 1.72311 9.09247 1.67937 9.11998 1.5145C9.16144 1.26613 9.06765 1.05372 8.8528 0.909534C8.65725 0.778293 8.45046 0.764549 7.98753 0.852043C7.8139 0.884869 7.46198 0.939169 7.20547 0.972731C6.94897 1.00629 6.53632 1.11403 6.28849 1.21214L5.83788 1.39057L5.76326 1.13348C5.72217 0.992057 5.61542 0.783017 5.52597 0.668957C5.43647 0.554896 5.3633 0.401137 5.3633 0.327265C5.3633 0.252226 5.31255 0.149209 5.24833 0.0938663C5.11089 -0.0246122 5.07316 -0.0284777 4.99952 0.0684035ZM7.32524 3.9185C7.32281 4.07986 7.33503 4.11312 7.37649 4.05857C7.41679 4.00556 7.41758 3.9504 7.37966 3.84689C7.33149 3.71535 7.32817 3.7197 7.32524 3.9185ZM7.23275 4.81988C7.19652 4.95173 7.03674 5.22513 6.86278 5.45283C6.62017 5.77047 6.57442 5.85814 6.64228 5.87532C6.79147 5.91312 6.96664 5.67739 7.151 5.19065C7.24931 4.93112 7.32225 4.68931 7.31316 4.6533C7.30402 4.61728 7.26783 4.69226 7.23275 4.81988ZM7.2862 5.8028C7.15804 6.01233 7.15557 6.06903 7.27454 6.06903C7.33377 6.06903 7.37724 6.01491 7.39571 5.91827C7.443 5.67039 7.39692 5.6218 7.2862 5.8028ZM5.84133 6.13768C5.66038 6.2064 5.64965 6.2707 5.80383 6.3631C5.89669 6.41882 5.93712 6.41108 6.02112 6.32157C6.07941 6.25947 6.10977 6.18057 6.09084 6.14032C6.05278 6.05927 6.04779 6.05921 5.84133 6.13768ZM6.8771 6.31856C6.83265 6.41311 6.86245 6.43047 7.0067 6.39403C7.07694 6.3763 7.12292 6.33734 7.10889 6.30745C7.07335 6.23174 6.91427 6.23935 6.8771 6.31856ZM6.48259 6.46784C6.45023 6.51919 6.44514 6.55987 6.47117 6.55987C6.49682 6.55987 6.54392 6.51846 6.57587 6.46784C6.60823 6.41648 6.61332 6.3758 6.58729 6.3758C6.56164 6.3758 6.51454 6.41722 6.48259 6.46784ZM6.81698 6.63473C6.51193 6.73578 6.46039 6.73836 6.33876 6.65853C6.21709 6.57871 6.19428 6.57981 6.12628 6.66927C6.05577 6.76198 6.05987 6.77296 6.18085 6.81548C6.25272 6.84082 6.3993 6.84567 6.50652 6.82634C6.64825 6.80082 6.76186 6.82634 6.92285 6.92003C7.18448 7.07232 7.30075 7.02409 7.33125 6.75063C7.35807 6.51036 7.25948 6.48815 6.81698 6.63473ZM8.04681 7.0047C8.08566 7.17509 8.19526 7.33357 8.23667 7.27915C8.28615 7.21399 8.15659 6.86665 8.08277 6.86665C8.03459 6.86665 8.02433 6.90611 8.04681 7.0047ZM2.68165 7.54157C2.60717 7.58366 2.62414 7.59519 2.76601 7.59863C2.87328 7.60121 2.93223 7.57863 2.91483 7.54157C2.88079 7.46911 2.80981 7.46911 2.68165 7.54157ZM1.53903 8.24354C1.53903 8.29613 1.56002 8.3392 1.58567 8.3392C1.61132 8.3392 1.63231 8.31325 1.63231 8.28146C1.63231 8.24968 1.61132 8.20667 1.58567 8.18581C1.56002 8.16495 1.53903 8.19096 1.53903 8.24354Z" fill="#828282"/>
                    </svg>

                        <span class="text-sm text-black leading-6">RIVAL DE KERMOAL | PONEY FRANCAIS DE SELLE</span>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    <button
                        class="bg-black text-white py-3 px-6 text-lg leading-5 tracking-tight font-semibold h-[44px] flex items-center grid grid-cols-2 gap-1">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_201_899)">
                            <path d="M2.5 0V20L18.2143 10L2.5 0Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_201_899">
                            <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                            </defs>
                            </svg>

                        Demarrer
                    </button>
                    <button
                        class="bg-white text-[#858386] py-3 px-6 text-lg leading-5 tracking-tight font-semibold h-[44px] flex items-center border-[#858386] grid grid-cols-2 gap-1">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" fill="#858386"/>
                            </svg>


                        Arrêter
                    </button>

                </div>
                
            </div>
            <div class="py-1.5 inline-flex px-6 bg-[#858386] uppercase w-auto text-white">
                Coach
            </div>
        </div>
    );
};

export default Card_participant;