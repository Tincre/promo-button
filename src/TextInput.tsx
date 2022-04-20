import { useState } from 'react';

import Socials from './Socials';
function validateUrl(value: string) {
  try {
    if (typeof value === 'string' && !value.length) return value;
    const currentUrl = new URL(value);
    const { protocol } = currentUrl;

    if (protocol !== 'http:' && protocol !== 'https:') {
      currentUrl.protocol = 'http:';
      return currentUrl.toString();
    }
    return value;
  } catch (e) {
    return `https://${value}`;
  }
}
export default function TextInput() {
  let [targetLink, setTargetLink] = useState<string | null | undefined>(null);
  let [socialsData, setSocialsData] = useState<any>({
    socials: {
      Instagram: '',
      Spotify: '',
      Facebook: '',
      'Web Url': '',
      YouTube: '',
      Apple: '',
    },
    targetLink: targetLink,
  });
  let [isChanging, setIsChanging] = useState<boolean | null | undefined>(null);
  return (
    <div className="mt-3">
      <label
        htmlFor="target"
        className="block text-sm font-medium text-gray-700"
      >
        Target link for your ads
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="url"
          name="target"
          id="target"
          className="block w-full sm:text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 border-black focus:ring-border-black focus:border-transparent rounded-md"
          placeholder="https://youtube.com/watch?v=GS2Y_CkaXP0"
          formNoValidate
          onBlur={(event) => {
            event.preventDefault();
            event.target.value = validateUrl(event.target.value);
          }}
          onChange={(event) => {
            setIsChanging(true);
            setTargetLink(event.target.value);
            socialsData['targetLink'] = event.target.value;
            setSocialsData(socialsData);
            setIsChanging(false);
          }}
          required
        />
      </div>
      <div className="mt-2 -mb-1 text-center">
        {!isChanging ? (
          <Socials props={socialsData} />
        ) : (
          <Socials props={socialsData} />
        )}
      </div>
    </div>
  );
}
